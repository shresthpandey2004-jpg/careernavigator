# ⚡ Quick Deploy Commands

## 🚀 Push to GitHub (Do This First!)

```bash
# 1. Add remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/careernavigator.git

# 2. Rename branch to main
git branch -M main

# 3. Push to GitHub
git push -u origin main
```

**Done! Your code is on GitHub!** ✅

---

## 📝 What to Do Next

### Step 1: Setup Database (5 minutes)

1. Go to [supabase.com](https://supabase.com)
2. Create account (use GitHub login)
3. Create new project
4. Go to SQL Editor
5. Copy-paste content from `database-schema.sql`
6. Click Run
7. Go to Settings → Database → Copy connection string
8. Save this string!

### Step 2: Deploy Backend (5 minutes)

1. Go to [railway.app](https://railway.app)
2. Login with GitHub
3. New Project → Deploy from GitHub
4. Select your repo
5. Settings:
   - Root Directory: `backend`
   - Build: `npm install && npm run build`
   - Start: `npm start`
6. Variables tab → Add:
   ```
   DATABASE_URL = your-supabase-connection-string
   JWT_SECRET = any-random-long-string
   NODE_ENV = production
   FRONTEND_URL = https://your-app.vercel.app
   ```
7. Deploy!
8. Settings → Generate Domain → Copy URL

### Step 3: Deploy Frontend (5 minutes)

1. Go to [vercel.com](https://vercel.com)
2. Login with GitHub
3. New Project → Import your repo
4. Settings:
   - Framework: Vite
   - Root Directory: `frontend`
   - Build: `npm run build`
   - Output: `dist`
5. Environment Variables:
   ```
   VITE_API_URL = your-railway-backend-url/api
   ```
6. Deploy!

### Step 4: Update Backend URL (2 minutes)

1. Go back to Railway
2. Variables → Edit FRONTEND_URL
3. Set to your Vercel URL
4. Redeploy

---

## ✅ That's It!

Your app is live! 🎉

**Frontend:** https://your-app.vercel.app  
**Backend:** https://your-app.railway.app

---

## 🔄 Future Updates

```bash
# Make changes
git add .
git commit -m "Update message"
git push
```

**Auto-deploys to Vercel & Railway!** ✨

---

## 📞 Need Help?

Check `GITHUB-DEPLOY-GUIDE.md` for detailed instructions!

---

**Jai Shree Ram! 🙏**
