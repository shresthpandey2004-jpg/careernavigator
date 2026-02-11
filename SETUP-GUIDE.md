# 🚀 CareerNavigator - Complete Setup Guide

## Step-by-Step Installation

### Step 1: Install Node.js

Download and install Node.js 18+ from [nodejs.org](https://nodejs.org)

Verify installation:
```bash
node --version
npm --version
```

### Step 2: Clone/Download Project

If you have the project folder, open terminal in that folder.

### Step 3: Install Frontend

```bash
cd frontend
npm install
```

This will install all frontend dependencies (React, Tailwind, etc.)

### Step 4: Install Backend

```bash
cd ../backend
npm install
```

This will install all backend dependencies (Express, PostgreSQL client, etc.)

### Step 5: Setup Database

**Option A: Use Supabase (Recommended - Free)**

1. Go to [supabase.com](https://supabase.com)
2. Sign up / Login
3. Click "New Project"
4. Fill details:
   - Name: CareerNavigator
   - Database Password: (choose a strong password)
   - Region: (closest to you)
5. Wait for project to be created
6. Go to "SQL Editor" in left sidebar
7. Click "New Query"
8. Copy entire content from `database-schema.sql` file
9. Paste and click "Run"
10. Go to "Settings" → "Database"
11. Copy "Connection String" (URI format)

**Option B: Local PostgreSQL**

1. Install PostgreSQL from [postgresql.org](https://postgresql.org)
2. Create database:
```bash
createdb careernavigator
```
3. Run schema:
```bash
psql -d careernavigator -f database-schema.sql
```

### Step 6: Configure Backend Environment

```bash
cd backend
cp .env.example .env
```

Edit `.env` file:
```env
PORT=5000
DATABASE_URL=your-supabase-connection-string-here
JWT_SECRET=your-random-secret-key-here
FRONTEND_URL=http://localhost:3000
```

**Generate JWT Secret:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Step 7: Configure Frontend Environment

```bash
cd ../frontend
echo "VITE_API_URL=http://localhost:5000/api" > .env
```

### Step 8: Start Backend Server

```bash
cd backend
npm run dev
```

You should see:
```
🚀 Server running on http://localhost:5000
```

Keep this terminal open!

### Step 9: Start Frontend (New Terminal)

Open a NEW terminal window:

```bash
cd frontend
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
```

### Step 10: Open Browser

Go to: `http://localhost:3000`

You should see the CareerNavigator landing page! 🎉

---

## Testing the Application

### 1. Register a New Account

- Click "Get Started" or "Register"
- Fill in your details
- Click "Create Account"

### 2. Explore Features

- **Dashboard**: See your career progress
- **Career DNA**: Take the assessment
- **Skill Gap**: Analyze your skills
- **Jobs**: Browse job listings
- **Profile**: Update your information

---

## Common Issues & Solutions

### Issue 1: "Cannot find module"

**Solution:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue 2: "Port 3000 already in use"

**Solution:**
```bash
# Kill the process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill -9
```

### Issue 3: "Database connection failed"

**Solution:**
- Check if DATABASE_URL in `.env` is correct
- Verify database is running
- Check if schema was created successfully

### Issue 4: "CORS error"

**Solution:**
- Make sure backend is running on port 5000
- Check FRONTEND_URL in backend `.env`
- Restart both servers

---

## Deployment Guide

### Deploy to Vercel (Frontend)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Vite
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Add Environment Variable:
   - Name: `VITE_API_URL`
   - Value: Your backend URL (from Railway)
7. Click "Deploy"

### Deploy to Railway (Backend)

1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository
5. Configure:
   - Root Directory: `backend`
   - Build Command: `npm run build`
   - Start Command: `npm start`
6. Add Environment Variables:
   - `DATABASE_URL`: Your Supabase connection string
   - `JWT_SECRET`: Your secret key
   - `FRONTEND_URL`: Your Vercel URL
   - `NODE_ENV`: `production`
7. Click "Deploy"

---

## Development Tips

### Hot Reload

Both frontend and backend have hot reload enabled. Changes will reflect automatically!

### Debugging

**Frontend:**
- Open browser DevTools (F12)
- Check Console for errors
- Use React DevTools extension

**Backend:**
- Check terminal for error logs
- Use Postman to test APIs
- Add `console.log()` for debugging

### Database

**View Data:**
- Supabase: Go to "Table Editor"
- Local: Use `psql` or pgAdmin

**Reset Database:**
```bash
# Drop all tables and recreate
psql -d careernavigator -f database-schema.sql
```

---

## Project Structure Explained

```
CareerNavigator/
├── frontend/
│   ├── src/
│   │   ├── components/     # Navbar, Footer, etc.
│   │   ├── pages/          # Landing, Dashboard, etc.
│   │   ├── services/       # API calls
│   │   ├── store/          # State management
│   │   └── App.tsx         # Main app component
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── routes/         # API endpoints
│   │   ├── middleware/     # Auth middleware
│   │   ├── utils/          # Database connection
│   │   └── server.ts       # Express server
│   └── package.json
│
└── database-schema.sql     # Database tables
```

---

## Next Steps

1. ✅ Complete your profile
2. ✅ Take Career DNA assessment
3. ✅ Analyze skill gaps
4. ✅ Browse and apply to jobs
5. ✅ Track your applications

---

## Need Help?

- Check README.md for detailed documentation
- Review code comments
- Test API endpoints with Postman
- Check browser console for frontend errors
- Check terminal for backend errors

---

## Success Checklist

- [ ] Node.js installed
- [ ] Frontend dependencies installed
- [ ] Backend dependencies installed
- [ ] Database created and schema loaded
- [ ] Backend .env configured
- [ ] Frontend .env configured
- [ ] Backend server running (port 5000)
- [ ] Frontend server running (port 3000)
- [ ] Can access http://localhost:3000
- [ ] Can register new account
- [ ] Can login successfully
- [ ] Can navigate all pages

---

**If all checkboxes are checked, you're ready to go! 🎉**

**Happy Coding! 💻**

**Jai Shree Ram! 🙏**
