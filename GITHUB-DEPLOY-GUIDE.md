# 🚀 GitHub & Vercel Deployment Guide

## Step 1: Push to GitHub

### 1.1 Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "+" icon → "New repository"
3. Fill details:
   - **Repository name:** `careernavigator`
   - **Description:** "AI-Powered Career Guidance Platform"
   - **Visibility:** Public (or Private)
   - **DON'T** initialize with README (we already have one)
4. Click "Create repository"

### 1.2 Push Your Code

GitHub will show you commands. Use these:

```bash
# Already done (Git is initialized and committed)
# Now add remote and push:

git remote add origin https://github.com/YOUR-USERNAME/careernavigator.git
git branch -M main
git push -u origin main
```

**Replace `YOUR-USERNAME` with your GitHub username!**

Example:
```bash
git remote add origin https://github.com/shreshth/careernavigator.git
git branch -M main
git push -u origin main
```

---

## Step 2: Setup Database (Supabase)

### 2.1 Create Supabase Account

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign in with GitHub

### 2.2 Create New Project

1. Click "New Project"
2. Fill details:
   - **Name:** CareerNavigator
   - **Database Password:** (create a strong password - SAVE THIS!)
   - **Region:** Choose closest to you
3. Click "Create new project"
4. Wait 2-3 minutes for setup

### 2.3 Run Database Schema

1. In Supabase dashboard, click "SQL Editor" (left sidebar)
2. Click "New Query"
3. Open `database-schema.sql` from your project
4. Copy ALL content
5. Paste in Supabase SQL Editor
6. Click "Run" (or press Ctrl+Enter)
7. You should see "Success. No rows returned"

### 2.4 Get Connection String

1. Click "Settings" (gear icon in left sidebar)
2. Click "Database"
3. Scroll to "Connection string"
4. Select "URI" tab
5. Copy the connection string
6. Replace `[YOUR-PASSWORD]` with your database password
7. **SAVE THIS STRING** - you'll need it for deployment!

Example:
```
postgresql://postgres:your-password@db.xxx.supabase.co:5432/postgres
```

---

## Step 3: Deploy Backend to Railway

### 3.1 Create Railway Account

1. Go to [railway.app](https://railway.app)
2. Click "Login"
3. Sign in with GitHub

### 3.2 Deploy Backend

1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. Choose your `careernavigator` repository
4. Railway will detect it's a Node.js project

### 3.3 Configure Backend

1. Click on your deployment
2. Go to "Settings" tab
3. Set **Root Directory:** `backend`
4. Set **Build Command:** `npm install && npm run build`
5. Set **Start Command:** `npm start`

### 3.4 Add Environment Variables

1. Go to "Variables" tab
2. Click "New Variable"
3. Add these variables:

```
DATABASE_URL = your-supabase-connection-string
JWT_SECRET = any-random-long-string-here
NODE_ENV = production
FRONTEND_URL = https://your-app.vercel.app
```

**Generate JWT Secret:**
```bash
# Run this in terminal:
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

4. Click "Deploy"

### 3.5 Get Backend URL

1. Go to "Settings" tab
2. Scroll to "Domains"
3. Click "Generate Domain"
4. Copy the URL (e.g., `https://careernavigator-production.up.railway.app`)
5. **SAVE THIS URL** - you'll need it for frontend!

---

## Step 4: Deploy Frontend to Vercel

### 4.1 Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Sign in with GitHub

### 4.2 Import Project

1. Click "Add New..." → "Project"
2. Import your `careernavigator` repository
3. Vercel will detect it's a Vite project

### 4.3 Configure Frontend

1. **Framework Preset:** Vite
2. **Root Directory:** `frontend`
3. **Build Command:** `npm run build`
4. **Output Directory:** `dist`
5. **Install Command:** `npm install`

### 4.4 Add Environment Variable

1. Expand "Environment Variables"
2. Add:
   - **Name:** `VITE_API_URL`
   - **Value:** `https://your-railway-backend-url/api`
   
   Example:
   ```
   https://careernavigator-production.up.railway.app/api
   ```

3. Click "Deploy"

### 4.5 Wait for Deployment

- Vercel will build and deploy (2-3 minutes)
- You'll get a URL like: `https://careernavigator.vercel.app`

---

## Step 5: Update Backend FRONTEND_URL

### 5.1 Update Railway Variable

1. Go back to Railway
2. Go to "Variables" tab
3. Edit `FRONTEND_URL` variable
4. Set it to your Vercel URL: `https://careernavigator.vercel.app`
5. Save

### 5.2 Redeploy Backend

1. Go to "Deployments" tab
2. Click "Redeploy" on latest deployment
3. Wait for deployment to complete

---

## Step 6: Test Your Live App! 🎉

1. Open your Vercel URL: `https://careernavigator.vercel.app`
2. You should see the landing page!
3. Click "Get Started" and register
4. Test all features

---

## 🎯 Quick Reference

### Your URLs

```
Frontend: https://careernavigator.vercel.app
Backend:  https://careernavigator-production.up.railway.app
Database: Supabase (managed)
GitHub:   https://github.com/YOUR-USERNAME/careernavigator
```

### Environment Variables

**Backend (Railway):**
```
DATABASE_URL = postgresql://postgres:password@db.xxx.supabase.co:5432/postgres
JWT_SECRET = your-random-secret-key
NODE_ENV = production
FRONTEND_URL = https://careernavigator.vercel.app
```

**Frontend (Vercel):**
```
VITE_API_URL = https://careernavigator-production.up.railway.app/api
```

---

## 🔧 Troubleshooting

### Issue: "Cannot connect to database"

**Solution:**
- Check DATABASE_URL in Railway
- Verify Supabase database is running
- Check if schema was created successfully

### Issue: "CORS error"

**Solution:**
- Update FRONTEND_URL in Railway to your Vercel URL
- Redeploy backend
- Clear browser cache

### Issue: "API not found"

**Solution:**
- Check VITE_API_URL in Vercel
- Make sure it ends with `/api`
- Verify backend is deployed and running

### Issue: "Build failed"

**Solution:**
- Check build logs in Vercel/Railway
- Verify all dependencies are in package.json
- Check if root directory is set correctly

---

## 🔄 Making Updates

### Update Code

```bash
# Make your changes
git add .
git commit -m "Your update message"
git push
```

**Vercel will auto-deploy!** (Frontend)
**Railway will auto-deploy!** (Backend)

---

## 📊 Monitoring

### Vercel Dashboard
- View deployments
- Check build logs
- Monitor performance
- View analytics

### Railway Dashboard
- View deployments
- Check logs
- Monitor resources
- View metrics

### Supabase Dashboard
- View database tables
- Run SQL queries
- Monitor usage
- Check logs

---

## 💰 Costs

### Free Tier Limits

**Vercel:**
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Custom domains

**Railway:**
- ✅ $5 free credit/month
- ✅ Enough for small projects
- ✅ Auto-scaling

**Supabase:**
- ✅ 500MB database
- ✅ Unlimited API requests
- ✅ 2GB bandwidth

**Total: FREE for development/small projects!**

---

## 🎉 Success Checklist

- [ ] Code pushed to GitHub
- [ ] Supabase database created
- [ ] Database schema loaded
- [ ] Backend deployed to Railway
- [ ] Backend environment variables set
- [ ] Backend URL copied
- [ ] Frontend deployed to Vercel
- [ ] Frontend environment variable set
- [ ] Backend FRONTEND_URL updated
- [ ] Live app tested and working

---

## 🚀 You're Live!

**Congratulations! Your app is now live on the internet!** 🎉

Share your link:
```
https://careernavigator.vercel.app
```

**Next Steps:**
1. Test all features
2. Share with friends
3. Get feedback
4. Make improvements
5. Present in Review 1

---

**All the best! 💪**

**Jai Shree Ram! 🙏**
