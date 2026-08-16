# Sustainability Engine - Implementation Prompt

## Overview

Build a comprehensive **Sustainability Engine** that tracks environmental impact of clothing rentals. The system calculates and displays metrics for:

- **Textile Waste Prevented** (kg)
- **Water Saved** (liters)
- **CO₂ Emissions Reduced** (tons)
- **Sustainability Score** (0-10 scale)

---

## Feature Description

### Core Metrics

1. **Water Saved**: 2,700 liters per rental (vs. buying new)
2. **CO₂ Saved**: 6.5 kg per rental (vs. manufacturing & transportation)
3. **Textile Waste Prevented**: Average 0.5 kg per rental

### Sustainability Score Formula

```
Score = (total_rentals + co2_saved_kg + water_saved_liters) / 100
Min: 0, Max: 10
```

### Badges/Achievements

- **Eco Warrior**: Completed 10+ rentals
- **Super Lender**: Lent 50+ items
- Other environmental milestones

---

## Architecture

### Backend Components

#### 1. Database Schema

**Table**: `profiles`

- `total_rentals` - INTEGER (cumulative rental count)
- `co2_saved_kg` - NUMERIC(10,2) (cumulative CO₂ savings)
- `water_saved_liters` - NUMERIC(10,2) (cumulative water savings)
- `sustainability_score` - COMPUTED ON-THE-FLY (not stored)

**Badges Table**: `user_badges`

- Links eco_warrior, super_lender badges to users

#### 2. API Endpoints

**GET /api/users/me**

- Returns current user profile with sustainability metrics
- Computes `sustainability_score` dynamically
- Includes `co2_saved_kg`, `water_saved_liters`, badges

**GET /api/users/:username**

- Returns public profile (no auth required)
- Includes sustainability metrics

**Trigger on Order Completion**

- Updates profile stats when order status → "completed"
- Awards badges if thresholds met (rental_count, items_lent)
- **Security**: Only update on PAID orders (validate payment status)

#### 3. Database Triggers/Migrations

- Migration: Update profiles on order completion
- Prevent stat farming (check payment status)
- Award badges automatically

### Frontend Components

#### 1. **EcoImpactCard.tsx**

- Displays sustainability impact summary
- Shows: CO₂ saved, water saved, textile waste prevented
- Appears on user profiles (own + public)
- Responsive design

#### 2. **Sustainability Utilities** (`lib/sustainability.ts`)

```typescript
export function calcEcoScore(co2: number, water: number, trips: number): number;
export function fmtCo2(kg: number): string; // Format CO₂ in tons
export function fmtWater(liters: number): string; // Format water in millions
export function calcSustainabilityScore(
  co2: number,
  water: number,
  trips: number,
): number;
```

#### 3. **Profile Pages Integration**

- `/profile/me` - Own profile with full sustainability stats
- `/profile/[username]` - Public profile with sustainability display
- Show score, badges, individual metrics

---

## Dependencies

### Backend (Node.js)

```json
{
  "dependencies": {
    "express": "^4.18.2",
    "supabase-js": "^2.38.0",
    "dotenv": "^16.0.3",
    "cors": "^2.8.5",
    "socket.io": "^4.5.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.20"
  }
}
```

### Frontend (React + TypeScript)

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "next": "^14.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.3.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/node": "^20.0.0"
  }
}
```

### Database (Supabase/PostgreSQL)

- PostgreSQL 13+
- Supabase JS client
- Row-level security (RLS) policies

---

## Implementation Steps

### Phase 1: Database Setup

1. ✅ Create `profiles` columns: `total_rentals`, `co2_saved_kg`, `water_saved_liters`
2. ✅ Create `badges` table and `user_badges` junction
3. ✅ Create trigger on `orders` table (status='completed' → update profiles)
4. ✅ Create migrations to ensure data consistency

### Phase 2: Backend API

1. ✅ Modify `GET /api/users/me` to compute sustainability_score
2. ✅ Modify `GET /api/users/:username` for public profiles
3. ✅ Update order completion logic to award badges
4. ✅ Add validation: only count paid orders (payment_status='completed')

### Phase 3: Frontend Display

1. ✅ Create `EcoImpactCard.tsx` component
2. ✅ Create `lib/sustainability.ts` utility functions
3. ✅ Integrate into `/profile/me` page
4. ✅ Integrate into `/profile/[username]` page
5. ✅ Style with Tailwind CSS

### Phase 4: Testing & Security

1. ✅ Test metric calculations (verify formulas)
2. ✅ Security audit: prevent stat farming via payment checks
3. ✅ E2E testing: full rental → completion → stat update flow
4. ✅ Performance: ensure score computation is fast

---

## File Structure

```
earth/
├── prompt.md                    # This file
├── backend/
│   ├── schema.sql              # Database schema updates
│   ├── migrations.sql           # DB migrations
│   ├── routes/users.js          # User API endpoints
│   └── routes/orders.js         # Order completion logic
├── frontend/
│   ├── components/
│   │   └── EcoImpactCard.tsx    # Sustainability display component
│   ├── lib/
│   │   └── sustainability.ts    # Utility functions
│   └── pages/
│       ├── profile/me/page.tsx
│       └── profile/[username]/page.tsx
└── tests/
    ├── sustainability.test.js   # Unit tests
    └── e2e-sustainability.test.js
```

---

## Key Implementation Details

### Computation (Not Storage)

- **sustainability_score** is computed on-the-fly in API responses
- Formula: `(total_rentals + co2_saved_kg + water_saved_liters) / 100`
- Capped at 10.0 (or define max limit)

### Security Checks

- Only increment stats on status='completed' AND payment_status='paid'
- Prevent two-account abuse (renter + lender collusion)
- RLS policies: users can only see their own profiles (except public view)

### Real-time Updates

- Optional: Use Socket.io to push stat updates to frontend
- Alternative: Refetch on component mount or periodic polling

---

## Testing Checklist

- [ ] Calculate water saved: 1 rental = 2,700 liters
- [ ] Calculate CO₂ saved: 1 rental = 6.5 kg
- [ ] Sustainability score formula: (rentals + co2 + water) / 100, max 10
- [ ] Badge: Eco Warrior awarded at 10+ rentals
- [ ] Badge: Super Lender awarded at 50+ items lent
- [ ] Public profile shows stats (no auth required)
- [ ] Private profile shows full data (auth required)
- [ ] Stats only update on PAID completed orders
- [ ] No double-counting (idempotent trigger logic)

---

## API Response Examples

### GET /api/users/me

```json
{
  "profile": {
    "id": "user123",
    "username": "eco_lover",
    "total_rentals": 15,
    "co2_saved_kg": 97.5,
    "water_saved_liters": 40500,
    "sustainability_score": 8.5,
    "badges": ["eco_warrior", "super_lender"]
  }
}
```

### GET /api/users/john

```json
{
  "profile": {
    "username": "john",
    "total_rentals": 5,
    "co2_saved_kg": 32.5,
    "water_saved_liters": 13500,
    "sustainability_score": 4.6,
    "badges": []
  }
}
```

---

## References

- Implementation Guide: `earth/prompt.md`
- Database Schema: `earth/schema.sql`
- Dependencies: `earth/DEPENDENCIES.md`
- Checklist: `earth/IMPLEMENTATION_CHECKLIST.md`
- Backend Utils: `earth/backend-sustainability-utils.js`
- Frontend Utils: `earth/frontend-sustainability.ts`
