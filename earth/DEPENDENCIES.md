# Dependencies for Sustainability Engine

## Backend Dependencies

### Runtime Dependencies

```
express              ^4.18.2        HTTP server framework
supabase-js          ^2.38.0        Supabase client library
dotenv               ^16.0.3        Environment variables
cors                 ^2.8.5         CORS middleware
socket.io            ^4.5.0         Real-time WebSocket support
pg                   ^8.10.0        PostgreSQL client (if direct DB)
```

### Development Dependencies

```
nodemon              ^2.0.20        Auto-restart dev server
jest                 ^29.0.0        Testing framework
supertest            ^6.3.0         HTTP assertion library
```

---

## Frontend Dependencies

### React + Next.js Stack

```
react                ^18.2.0        Core React library
react-dom            ^18.2.0        React DOM rendering
next                 ^14.0.0        Next.js framework
typescript           ^5.0.0         TypeScript language
```

### Styling & UI

```
tailwindcss          ^3.3.0         Utility-first CSS framework
postcss              ^8.4.0         CSS processing
autoprefixer         ^10.4.0        CSS vendor prefixing
```

### Utilities

```
axios                ^1.4.0         HTTP client
zustand              ^4.4.0         State management (optional)
date-fns             ^2.30.0        Date utilities
```

### Development Dependencies

```
@types/react         ^18.2.0        React type definitions
@types/node          ^20.0.0        Node.js type definitions
eslint               ^8.40.0        Linting
prettier             ^3.0.0         Code formatting
```

---

## Database (Supabase/PostgreSQL)

### Required PostgreSQL Version

- PostgreSQL 13 or higher

### Required Extensions

- UUID extension (uuid-ossp) - for generating UUIDs
- PLpgSQL (built-in) - for triggers/stored procedures

### Key Tables Needed

- `profiles` - User sustainability metrics
- `orders` - Rental transactions
- `badges` - Badge definitions
- `user_badges` - User-badge relationships

---

## Environment Variables

### Backend (.env)

```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_api_key
DATABASE_URL=postgresql://user:password@host:port/db
NODE_ENV=development
PORT=5000
```

### Frontend (.env.local)

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_KEY=your_supabase_anon_key
```

---

## System Requirements

### Minimum

- Node.js 16+ (recommended 18+)
- npm 8+ or yarn 3+
- PostgreSQL 13+
- 2GB RAM
- 500MB disk space

### Recommended

- Node.js 20+
- PostgreSQL 15+
- 4GB+ RAM
- SSD storage
- Docker (optional, for containerization)

---

## Installation Commands

### Backend Setup

```bash
cd Revoot-Backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd Revoot-Frontend
npm install
npm run dev
```

### Database Setup

```bash
# Apply migrations to Supabase
psql -h your_host -U your_user -d your_db -f migrations/sustainability.sql
```

---

## Testing Tools

```
jest                 ^29.0.0        Unit & integration testing
supertest            ^6.3.0         HTTP endpoint testing
postman              (CLI)          API testing
```

---

## Optional Dependencies

For enhanced features:

```
socket.io            ^4.5.0         Real-time updates
redis                ^4.6.0         Caching/sessions
bull                 ^4.10.0        Job queue (background tasks)
stripe               ^12.0.0        Payment processing
nodemailer           ^6.9.0         Email notifications
```

---

## Deployment Dependencies

### Docker (optional)

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

### PM2 (production process manager)

```bash
npm install -g pm2
pm2 start src/server.js
```

---

## Quick Install Script

```bash
#!/bin/bash

echo "Installing Sustainability Engine dependencies..."

# Backend
cd Revoot-Backend
npm install
echo "✓ Backend dependencies installed"

# Frontend
cd ../Revoot-Frontend
npm install
echo "✓ Frontend dependencies installed"

# Database migrations (manual step)
echo "⚠️  Run migrations manually:"
echo "   psql -h your_host -U your_user -d your_db -f ../earth/schema.sql"

echo "✓ All setup complete!"
```

---

## Dependency Versions Compatibility

| Dependency | Min Version | Recommended | Max Version |
| ---------- | ----------- | ----------- | ----------- |
| Node.js    | 16.0.0      | 20.0.0      | -           |
| npm        | 8.0.0       | 9.0.0+      | -           |
| PostgreSQL | 13.0        | 15.0        | -           |
| React      | 17.0.0      | 18.2.0      | -           |
| Next.js    | 12.0.0      | 14.0.0+     | -           |
| TypeScript | 4.5.0       | 5.0.0+      | -           |

---

## Troubleshooting Dependencies

### Node version issues

```bash
nvm use 18  # or your preferred version
node --version
```

### Npm cache issues

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Supabase connection issues

```bash
# Test database connection
psql -c "SELECT version();"
```

### PostgreSQL extension issues

```sql
CREATE EXTENSION IF NOT EXISTS uuid-ossp;
CREATE EXTENSION IF NOT EXISTS plpgsql;
```
