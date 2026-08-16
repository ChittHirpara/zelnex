# Sustainability Engine - Implementation Checklist

## Phase 1: Database Setup ✓

- [ ] Run `schema.sql` against Supabase database
- [ ] Verify columns added to `profiles` table:
  - [ ] `co2_saved_kg` (NUMERIC)
  - [ ] `water_saved_liters` (NUMERIC)
- [ ] Verify `badges` table created
- [ ] Verify `user_badges` junction table created
- [ ] Verify triggers created:
  - [ ] `trg_update_sustainability` on orders table
  - [ ] `trg_award_badges` on profiles table
- [ ] Test trigger: manually update order status to 'completed' and verify stats update
- [ ] Verify view created: `vw_user_sustainability`
- [ ] Test RLS policies

### Verification Queries

```sql
-- Check columns
SELECT column_name FROM information_schema.columns
WHERE table_name = 'profiles'
AND column_name IN ('co2_saved_kg', 'water_saved_liters');

-- Check badges
SELECT COUNT(*) as badge_count FROM badges;

-- Check triggers
SELECT trigger_name FROM information_schema.triggers
WHERE trigger_name LIKE 'trg_%sustainability%';
```

---

## Phase 2: Backend API - Users Route

### File: `src/routes/users.js`

#### GET /api/users/me (Update)

- [ ] Fetch profile with sustainability stats
- [ ] Compute `sustainability_score` dynamically:
  ```
  score = (total_rentals + co2_saved_kg + water_saved_liters) / 100
  capped at 10.0
  ```
- [ ] Fetch user badges from `user_badges` table
- [ ] Return response with:
  ```json
  {
    "profile": {
      "total_rentals": 15,
      "co2_saved_kg": 97.5,
      "water_saved_liters": 40500,
      "sustainability_score": 8.5,
      "badges": ["eco_warrior", "super_lender"]
    }
  }
  ```
- [ ] Add error handling for missing profiles

#### GET /api/users/:username (Update)

- [ ] Fetch public profile (no auth required)
- [ ] Compute `sustainability_score` dynamically
- [ ] Fetch badges
- [ ] Return same structure as /me but without sensitive data
- [ ] Handle non-existent users (404)

#### Code Template

```javascript
// In src/routes/users.js

router.get("/me", authenticate, async (req, res) => {
  try {
    const userId = req.user.id;

    // Fetch profile with sustainability stats
    const { data: profile, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("user_id", userId)
      .single();

    if (error) throw error;

    // Compute sustainability score on-the-fly
    const sustainability_score = Math.min(
      (profile.total_rentals +
        profile.co2_saved_kg +
        profile.water_saved_liters) /
        100,
      10,
    );

    // Fetch badges
    const { data: badges } = await supabase
      .from("user_badges")
      .select("badges(slug)")
      .eq("user_id", userId);

    const badgeSlugs = badges?.map((b) => b.badges.slug) || [];

    res.json({
      profile: {
        ...profile,
        sustainability_score,
        badges: badgeSlugs,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:username", async (req, res) => {
  try {
    const { username } = req.params;

    // Public profile (no auth needed)
    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("username", username)
      .single();

    if (!profile) {
      return res.status(404).json({ error: "User not found" });
    }

    // Compute score
    const sustainability_score = Math.min(
      (profile.total_rentals +
        profile.co2_saved_kg +
        profile.water_saved_liters) /
        100,
      10,
    );

    // Fetch badges
    const { data: badges } = await supabase
      .from("user_badges")
      .select("badges(slug)")
      .eq("user_id", profile.user_id);

    const badgeSlugs = badges?.map((b) => b.badges.slug) || [];

    res.json({
      profile: {
        username: profile.username,
        total_rentals: profile.total_rentals,
        co2_saved_kg: profile.co2_saved_kg,
        water_saved_liters: profile.water_saved_liters,
        sustainability_score,
        badges: badgeSlugs,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
```

---

## Phase 3: Backend API - Orders Route

### File: `src/routes/orders.js`

#### Order Completion Logic (Verify)

- [ ] Check that trigger handles stat updates automatically
- [ ] Verify trigger ONLY updates on:
  - [ ] `status = 'completed'`
  - [ ] `payment_status = 'completed'` (critical security check!)
- [ ] Add test case to verify no double-counting
- [ ] Log: Check that stats are updated after order completion

#### Security Checks

- [ ] Prevent stat farming: Order must have payment_status = 'completed'
- [ ] Cannot update stats via API directly (only via trigger)
- [ ] Add rate limiting to order completion endpoint
- [ ] Audit trail: Log all stat-affecting operations

---

## Phase 4: Frontend - Components

### File: `src/components/EcoImpactCard.tsx`

- [ ] Create component that displays:
  - [ ] Textile Waste Prevented (kg)
  - [ ] Water Saved (liters) → format as millions
  - [ ] CO₂ Emissions Reduced (kg) → format as tons
- [ ] Add styling with Tailwind CSS
- [ ] Make responsive (mobile & desktop)
- [ ] Props:
  ```typescript
  interface Props {
    co2SavedKg: number;
    waterSavedLiters: number;
    textileWastePrevented?: number;
  }
  ```
- [ ] Example output:
  ```
  Textile Waste Prevented: 450Kg+
  Water Saved: 1.2M liters
  CO₂ Reduced: 12 Tons
  ```

### File: `src/lib/sustainability.ts`

- [ ] Create utility function: `calcEcoScore(co2, water, trips): number`
- [ ] Create utility function: `fmtCo2(kg: number): string`
  - Format to tons (e.g., 6.5 kg → "6.5kg", 65 kg → "0.065T")
- [ ] Create utility function: `fmtWater(liters: number): string`
  - Format to millions (e.g., 2,700,000 → "2.7M")
- [ ] Create utility function: `calcSustainabilityScore(co2, water, trips): number`
  - Same formula as backend

#### Code Template

```typescript
// src/lib/sustainability.ts

export function calcEcoScore(
  co2: number,
  water: number,
  trips: number,
): number {
  return Math.min((trips + co2 + water) / 100, 10);
}

export function fmtCo2(kg: number): string {
  if (kg >= 1000) {
    return `${(kg / 1000).toFixed(2)}T`;
  }
  return `${kg.toFixed(1)}kg`;
}

export function fmtWater(liters: number): string {
  if (liters >= 1000000) {
    return `${(liters / 1000000).toFixed(1)}M`;
  }
  if (liters >= 1000) {
    return `${(liters / 1000).toFixed(1)}K`;
  }
  return `${liters}L`;
}

export function calcSustainabilityScore(
  co2: number,
  water: number,
  trips: number,
): number {
  return Math.min((trips + co2 + water) / 100, 10);
}
```

### File: `src/app/profile/me/page.tsx` (Update)

- [ ] Import `EcoImpactCard` component
- [ ] Display sustainability section showing:
  - [ ] Sustainability Score (0-10 scale)
  - [ ] Eco Impact Card
  - [ ] User Badges
- [ ] Fetch user data from `GET /api/users/me`
- [ ] Handle loading & error states
- [ ] Layout: Display prominently on profile

#### Integration Points

```typescript
// In profile/me/page.tsx

import { EcoImpactCard } from '@/components/EcoImpactCard';
import { calcSustainabilityScore } from '@/lib/sustainability';

export default function MyProfile() {
  const { profile } = useProfile(); // Your existing hook

  const score = calcSustainabilityScore(
    profile.co2_saved_kg,
    profile.water_saved_liters,
    profile.total_rentals
  );

  return (
    <div className="profile-page">
      {/* Existing profile content */}

      {/* New sustainability section */}
      <section className="sustainability-section">
        <h2>Your Environmental Impact</h2>
        <div className="score-display">
          <p className="score">{score.toFixed(1)}/10</p>
          <p className="label">Sustainability Score</p>
        </div>

        <EcoImpactCard
          co2SavedKg={profile.co2_saved_kg}
          waterSavedLiters={profile.water_saved_liters}
        />

        {/* Badges section */}
        {profile.badges && profile.badges.length > 0 && (
          <div className="badges">
            {profile.badges.map(badge => (
              <div key={badge} className="badge">{badge}</div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
```

### File: `src/app/profile/[username]/page.tsx` (Update)

- [ ] Same as above but for public profile
- [ ] No auth required to view
- [ ] Same sustainability display
- [ ] Handle non-existent users (404)

---

## Phase 5: Testing

### Unit Tests

#### Backend: `tests/sustainability.test.js`

- [ ] Test score calculation formula
  ```javascript
  expect(calcScore(10, 50, 100)).toBe(1.6); // (10+50+100)/100 = 1.6
  expect(calcScore(500, 500, 500)).toBe(10); // Should cap at 10
  ```
- [ ] Test water/CO₂ formatting
  ```javascript
  expect(fmtWater(2700000)).toBe("2.7M");
  expect(fmtCo2(1000)).toBe("1T");
  ```
- [ ] Test badge award logic (mocked)

#### Frontend: Sustainability utilities

- [ ] Test `calcEcoScore()`
- [ ] Test `fmtCo2()`
- [ ] Test `fmtWater()`
- [ ] Test component rendering

### Integration Tests

- [ ] Create test order → complete order → verify stats updated

  ```javascript
  // 1. Create order
  const orderId = await createOrder(...);

  // 2. Complete order (pay & mark completed)
  await completeOrder(orderId);

  // 3. Verify stats incremented
  const profile = await getProfile(userId);
  expect(profile.total_rentals).toBe(prev + 1);
  expect(profile.water_saved_liters).toBe(prev + 2700);
  expect(profile.co2_saved_kg).toBe(prev + 6.5);
  ```

- [ ] Test badge award on milestone

  ```javascript
  // Simulate 10 completions
  for (let i = 0; i < 10; i++) {
    await completeOrder(...);
  }

  // Verify eco_warrior badge awarded
  const badges = await getUserBadges(userId);
  expect(badges).toContain('eco_warrior');
  ```

- [ ] Test security: No stat update if payment not completed

  ```javascript
  // Order completed but NOT paid
  await updateOrder(orderId, {
    status: "completed",
    payment_status: "pending",
  });

  // Verify stats NOT updated
  const profile = await getProfile(userId);
  expect(profile.total_rentals).toBe(prev); // Should not change
  ```

### E2E Tests (Postman/Cypress)

- [ ] GET /api/users/me → returns sustainability_score
- [ ] GET /api/users/username → returns public profile with stats
- [ ] Complete rental flow → verify stats in profile
- [ ] Verify badge appears after 10 rentals

---

## Phase 6: Security & Performance

### Security Checklist

- [ ] Only PAID orders trigger stat updates (check payment_status)
- [ ] No direct API endpoint to update stats (trigger-based only)
- [ ] RLS policies: users can see public profiles, only own details
- [ ] Rate limiting on order completion endpoint
- [ ] Audit logging for stat changes
- [ ] Test: Cannot boost stats via two-account abuse

### Performance Checks

- [ ] Score computation is O(1) - just arithmetic
- [ ] Badge queries use indexes on user_badges(user_id)
- [ ] Profile queries use caching (optional: Redis)
- [ ] Load test: 1000+ concurrent profile views
- [ ] Monitor query performance in production

---

## Phase 7: Documentation

- [ ] Update API docs with sustainability endpoints
- [ ] Add examples to Postman collections
- [ ] Document badge unlock criteria
- [ ] Create user-facing sustainability feature guide
- [ ] Add troubleshooting guide

---

## Phase 8: Deployment

### Pre-Production

- [ ] Run all migrations on staging database
- [ ] Run all tests on staging
- [ ] Load test sustainability endpoints
- [ ] Test badge award logic with real data
- [ ] Verify no performance degradation

### Production Rollout

- [ ] Backup production database
- [ ] Run migrations during maintenance window
- [ ] Deploy backend changes
- [ ] Deploy frontend changes
- [ ] Monitor error rates & performance
- [ ] Run smoke tests
- [ ] Verify stats visible in production

---

## Verification Checklist

### Data Correctness

- [ ] 1 rental = 2,700 liters water saved
- [ ] 1 rental = 6.5 kg CO₂ saved
- [ ] Score formula: (rentals + co2 + water) / 100, max 10
- [ ] Eco Warrior badge: awarded at 10+ rentals
- [ ] No double-counting (trigger is idempotent)

### API Responses

- [ ] GET /api/users/me includes `sustainability_score`
- [ ] GET /api/users/:username includes `sustainability_score`
- [ ] Both return `badges` array
- [ ] Score is always 0-10 range
- [ ] Public profile doesn't leak sensitive data

### Frontend Display

- [ ] EcoImpactCard renders correctly
- [ ] Water formatted as millions (e.g., "1.2M")
- [ ] CO₂ formatted as tons (e.g., "12T")
- [ ] Score displays with 1 decimal (e.g., "8.5/10")
- [ ] Responsive on mobile
- [ ] Badges display with proper styling

---

## Common Issues & Fixes

### Issue: Trigger not firing

- Check: Is `payment_status` field set to 'completed'?
- Check: Is order status changed to 'completed' in same transaction?
- Solution: Manually test trigger with SQL INSERT

### Issue: Stats not updating

- Check: Run `SELECT * FROM profiles WHERE user_id = '...';`
- Check: Verify trigger logs (add logging to trigger function)
- Solution: Re-run schema.sql to recreate trigger

### Issue: Badges not awarded

- Check: Verify `user_badges` table populated
- Check: Ensure `trg_award_badges` trigger exists
- Solution: Manually insert test badge for debugging

### Issue: Score calculation wrong

- Check: Formula is `(total_rentals + co2_saved_kg + water_saved_liters) / 100`
- Check: Backend and frontend use same formula
- Solution: Add unit tests to catch discrepancies

---

## Sign-Off

- [ ] All tests passing
- [ ] Code reviewed
- [ ] Database migrations verified
- [ ] Security audit passed
- [ ] Performance acceptable
- [ ] Documentation complete
- [ ] Ready for production deployment
