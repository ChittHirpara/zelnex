-- Sustainability Engine Database Schema & Migrations
-- This file contains all SQL needed to implement the sustainability tracking feature

-- ============================================================================
-- PART 1: ALTER EXISTING PROFILES TABLE
-- ============================================================================

ALTER TABLE profiles ADD COLUMN IF NOT EXISTS co2_saved_kg NUMERIC(10,2) DEFAULT 0;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS water_saved_liters NUMERIC(10,2) DEFAULT 0;

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_profiles_sustainability ON profiles(co2_saved_kg, water_saved_liters);

-- ============================================================================
-- PART 2: CREATE BADGES TABLE (if not exists)
-- ============================================================================

CREATE TABLE IF NOT EXISTS badges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,                    -- 'eco_warrior', 'super_lender'
  name TEXT NOT NULL,                           -- Display name
  description TEXT,                             -- Badge description
  category TEXT DEFAULT 'sustainability',       -- Category: 'sustainability', 'rental_count', 'kyc'
  criteria JSONB DEFAULT '{}',                  -- Criteria JSON: {"min_rentals": 10}
  icon_url TEXT,                                -- URL to badge icon
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insert default badges (if not exists)
INSERT INTO badges (slug, name, description, category, criteria) 
VALUES 
  ('eco_warrior', 'Eco Warrior', 'Saved the planet by renting instead of buying 10+ outfits', 'sustainability', '{"min_rentals": 10}'),
  ('super_lender', 'Super Lender', 'Lent 50+ items in the circular fashion loop', 'sustainability', '{"min_items_lent": 50}'),
  ('water_hero', 'Water Hero', 'Saved 100,000+ liters of water through rentals', 'sustainability', '{"min_water_liters": 100000}'),
  ('carbon_warrior', 'Carbon Warrior', 'Reduced CO₂ emissions by 500+ kg through rentals', 'sustainability', '{"min_co2_kg": 500}')
ON CONFLICT (slug) DO NOTHING;

-- ============================================================================
-- PART 3: CREATE USER_BADGES JUNCTION TABLE
-- ============================================================================

CREATE TABLE IF NOT EXISTS user_badges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  badge_id UUID NOT NULL REFERENCES badges(id) ON DELETE CASCADE,
  awarded_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, badge_id)
);

CREATE INDEX IF NOT EXISTS idx_user_badges_user_id ON user_badges(user_id);
CREATE INDEX IF NOT EXISTS idx_user_badges_badge_id ON user_badges(badge_id);

-- ============================================================================
-- PART 4: TRIGGER - UPDATE SUSTAINABILITY STATS ON ORDER COMPLETION
-- ============================================================================

CREATE OR REPLACE FUNCTION update_sustainability_stats()
RETURNS TRIGGER AS $$
DECLARE
  v_water_saved NUMERIC := 2700;        -- liters per rental
  v_co2_saved NUMERIC := 6.5;           -- kg per rental
BEGIN
  -- Only update if order status changed to 'completed' AND payment is confirmed
  IF NEW.status = 'completed' AND NEW.payment_status = 'completed' THEN
    
    -- Update renter's sustainability stats
    UPDATE profiles 
    SET 
      total_rentals = total_rentals + 1,
      water_saved_liters = water_saved_liters + v_water_saved,
      co2_saved_kg = co2_saved_kg + v_co2_saved
    WHERE user_id = NEW.renter_id;
    
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS trg_update_sustainability ON orders;

-- Create trigger
CREATE TRIGGER trg_update_sustainability
AFTER UPDATE ON orders
FOR EACH ROW
EXECUTE FUNCTION update_sustainability_stats();

-- ============================================================================
-- PART 5: TRIGGER - AUTO-AWARD BADGES
-- ============================================================================

CREATE OR REPLACE FUNCTION award_badges_on_milestone()
RETURNS TRIGGER AS $$
BEGIN
  -- Eco Warrior: 10+ rentals
  IF NEW.total_rentals >= 10 THEN
    INSERT INTO user_badges (user_id, badge_id)
    SELECT NEW.user_id, id FROM badges WHERE slug = 'eco_warrior'
    ON CONFLICT (user_id, badge_id) DO NOTHING;
  END IF;
  
  -- Water Hero: 100,000+ liters
  IF NEW.water_saved_liters >= 100000 THEN
    INSERT INTO user_badges (user_id, badge_id)
    SELECT NEW.user_id, id FROM badges WHERE slug = 'water_hero'
    ON CONFLICT (user_id, badge_id) DO NOTHING;
  END IF;
  
  -- Carbon Warrior: 500+ kg CO₂
  IF NEW.co2_saved_kg >= 500 THEN
    INSERT INTO user_badges (user_id, badge_id)
    SELECT NEW.user_id, id FROM badges WHERE slug = 'carbon_warrior'
    ON CONFLICT (user_id, badge_id) DO NOTHING;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS trg_award_badges ON profiles;

-- Create trigger
CREATE TRIGGER trg_award_badges
AFTER UPDATE ON profiles
FOR EACH ROW
EXECUTE FUNCTION award_badges_on_milestone();

-- ============================================================================
-- PART 6: VIEW - USER PROFILE WITH SUSTAINABILITY STATS
-- ============================================================================

CREATE OR REPLACE VIEW vw_user_sustainability AS
SELECT 
  p.user_id,
  p.username,
  p.total_rentals,
  p.co2_saved_kg,
  p.water_saved_liters,
  -- Compute sustainability score on the fly
  LEAST(GREATEST(
    (p.total_rentals + p.co2_saved_kg + p.water_saved_liters) / 100.0,
    0
  ), 10.0) AS sustainability_score,
  COALESCE(
    JSON_AGG(DISTINCT b.slug ORDER BY b.slug) FILTER (WHERE b.slug IS NOT NULL),
    '[]'::JSON
  ) AS badges
FROM profiles p
LEFT JOIN user_badges ub ON p.user_id = ub.user_id
LEFT JOIN badges b ON ub.badge_id = b.id
GROUP BY p.user_id, p.username, p.total_rentals, p.co2_saved_kg, p.water_saved_liters;

-- ============================================================================
-- PART 7: ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================

-- Enable RLS on user_badges
ALTER TABLE user_badges ENABLE ROW LEVEL SECURITY;

-- Policy: Users can view their own badges
CREATE POLICY user_badges_view_own ON user_badges
FOR SELECT
USING (auth.uid() = user_id);

-- Policy: Users can view any public badges (no auth needed for viewing)
CREATE POLICY user_badges_view_public ON user_badges
FOR SELECT
USING (true);

-- ============================================================================
-- PART 8: STORED PROCEDURES - HELPER FUNCTIONS
-- ============================================================================

-- Function: Calculate sustainability score for a user
CREATE OR REPLACE FUNCTION get_sustainability_score(p_user_id UUID)
RETURNS NUMERIC AS $$
DECLARE
  v_score NUMERIC;
BEGIN
  SELECT LEAST(GREATEST(
    (total_rentals + co2_saved_kg + water_saved_liters) / 100.0, 0
  ), 10.0)
  INTO v_score
  FROM profiles
  WHERE user_id = p_user_id;
  
  RETURN COALESCE(v_score, 0);
END;
$$ LANGUAGE plpgsql;

-- Function: Get user badges
CREATE OR REPLACE FUNCTION get_user_badges(p_user_id UUID)
RETURNS TABLE(badge_slug TEXT, badge_name TEXT, awarded_at TIMESTAMP) AS $$
BEGIN
  RETURN QUERY
  SELECT b.slug, b.name, ub.awarded_at
  FROM user_badges ub
  JOIN badges b ON ub.badge_id = b.id
  WHERE ub.user_id = p_user_id
  ORDER BY ub.awarded_at DESC;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- PART 9: SAMPLE DATA (OPTIONAL - for testing)
-- ============================================================================

-- Insert test data (comment out in production)
/*
INSERT INTO profiles (user_id, username, total_rentals, co2_saved_kg, water_saved_liters)
VALUES 
  ('user-123', 'eco_lover', 15, 97.5, 40500),
  ('user-456', 'fashion_guru', 5, 32.5, 13500),
  ('user-789', 'sustainability_advocate', 25, 162.5, 67500)
ON CONFLICT (user_id) DO UPDATE SET 
  total_rentals = EXCLUDED.total_rentals,
  co2_saved_kg = EXCLUDED.co2_saved_kg,
  water_saved_liters = EXCLUDED.water_saved_liters;
*/

-- ============================================================================
-- PART 10: VERIFICATION QUERIES
-- ============================================================================

-- Check if columns were added
-- SELECT column_name FROM information_schema.columns WHERE table_name = 'profiles' AND column_name IN ('co2_saved_kg', 'water_saved_liters');

-- Check badges
-- SELECT * FROM badges;

-- Check user badges
-- SELECT * FROM user_badges;

-- Check sustainability view
-- SELECT * FROM vw_user_sustainability;

-- ============================================================================
-- PART 11: MIGRATION LOG
-- ============================================================================

-- Run this to create a migration log table (optional)
CREATE TABLE IF NOT EXISTS schema_migrations (
  id SERIAL PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  executed_at TIMESTAMP DEFAULT NOW()
);

-- Record this migration
INSERT INTO schema_migrations (name) 
VALUES ('001_sustainability_engine')
ON CONFLICT DO NOTHING;

-- Verify migrations
-- SELECT * FROM schema_migrations ORDER BY executed_at DESC;

-- ============================================================================
-- NOTES FOR IMPLEMENTATION
-- ============================================================================

/*
1. Run this file against your Supabase database:
   psql -h your_host -U your_user -d your_db -f sustainability_schema.sql

2. Test the trigger by completing an order:
   UPDATE orders SET status = 'completed', payment_status = 'completed' WHERE id = 'order-123';
   SELECT total_rentals, co2_saved_kg, water_saved_liters FROM profiles WHERE user_id = 'user-id';

3. Verify badges are awarded:
   SELECT * FROM user_badges WHERE user_id = 'user-id';

4. Use the vw_user_sustainability view in your API queries:
   SELECT * FROM vw_user_sustainability WHERE user_id = 'user-id';

5. Security reminder:
   - Only update stats on PAID orders (payment_status = 'completed')
   - RLS policies prevent unauthorized badge viewing
   - Sustainability score is computed on-the-fly, not stored
*/
