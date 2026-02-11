# 🧭 CareerNavigator

**AI-Powered Career Guidance Platform for Engineering Students**

CareerNavigator helps students navigate their career journey with personalized insights, skill gap analysis, smart job matching, and comprehensive interview preparation.

---

## ✨ Features

- 🧬 **Career DNA Analyzer** - AI-powered assessment to find your perfect career match
- 🎯 **Skill Gap Analysis** - Identify missing skills and get personalized learning roadmaps
- 💼 **Smart Job Matching** - AI matches you with relevant jobs from 1000+ companies
- 📊 **Market Intelligence** - Real-time salary data, trends, and hiring insights
- 👥 **Mentor Matching** - Connect with industry professionals for guidance
- 🎤 **Interview Prep** - AI-powered mock interviews with real-time feedback

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (or use Supabase/Neon free tier)

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd CareerNavigator
```

2. **Install Frontend Dependencies**
```bash
cd frontend
npm install
```

3. **Install Backend Dependencies**
```bash
cd ../backend
npm install
```

4. **Set up Database**

Create a PostgreSQL database and run the schema:
```bash
psql -U your_username -d your_database -f ../database-schema.sql
```

Or use a free PostgreSQL service:
- [Supabase](https://supabase.com) - Free tier with 500MB
- [Neon](https://neon.tech) - Free tier with 3GB

5. **Configure Environment Variables**

Backend (.env):
```bash
cd backend
cp .env.example .env
# Edit .env with your database URL and JWT secret
```

Frontend (.env):
```bash
cd ../frontend
echo "VITE_API_URL=http://localhost:5000/api" > .env
```

6. **Start Development Servers**

Terminal 1 - Backend:
```bash
cd backend
npm run dev
```

Terminal 2 - Frontend:
```bash
cd frontend
npm run dev
```

7. **Open your browser**
```
http://localhost:3000
```

---

## 📁 Project Structure

```
CareerNavigator/
├── frontend/                 # React + TypeScript frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API service layer
│   │   ├── store/           # Zustand state management
│   │   ├── types/           # TypeScript types
│   │   └── utils/           # Helper functions
│   ├── package.json
│   └── vite.config.ts
│
├── backend/                  # Node.js + Express backend
│   ├── src/
│   │   ├── routes/          # API routes
│   │   ├── controllers/     # Business logic
│   │   ├── middleware/      # Auth, validation
│   │   └── utils/           # Database, helpers
│   ├── package.json
│   └── tsconfig.json
│
├── database-schema.sql       # PostgreSQL schema
└── README.md                 # This file
```

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **State Management:** Zustand
- **Routing:** React Router v6
- **HTTP Client:** Axios
- **Icons:** Lucide React

### Backend
- **Runtime:** Node.js 20
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** PostgreSQL
- **Authentication:** JWT + bcrypt
- **Validation:** Zod

### Deployment
- **Frontend:** Vercel (recommended)
- **Backend:** Railway / Render
- **Database:** Supabase / Neon

---

## 📦 Available Scripts

### Frontend

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm run preview  # Preview production build
```

### Backend

```bash
npm run dev      # Start development server with hot reload (port 5000)
npm run build    # Compile TypeScript to JavaScript
npm start        # Start production server
```

---

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get current user (protected)

### Profile
- `GET /api/profile` - Get user profile (protected)
- `PUT /api/profile` - Update profile (protected)

### Career
- `GET /api/career/paths` - Get career recommendations (protected)

### Jobs
- `GET /api/jobs` - Get all jobs (protected)
- `POST /api/jobs/:id/apply` - Apply to job (protected)

### Applications
- `GET /api/applications` - Get user applications (protected)

---

## 🚢 Deployment

### Deploy Frontend to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Set root directory to `frontend`
5. Add environment variable: `VITE_API_URL=your-backend-url`
6. Deploy!

### Deploy Backend to Railway

1. Go to [Railway](https://railway.app)
2. Create new project from GitHub
3. Set root directory to `backend`
4. Add environment variables from `.env.example`
5. Deploy!

### Database Setup

Use Supabase or Neon for free PostgreSQL:

1. Create account on [Supabase](https://supabase.com)
2. Create new project
3. Go to SQL Editor
4. Paste contents of `database-schema.sql`
5. Run the query
6. Copy connection string to backend `.env`

---

## 🎨 Features Showcase

### Landing Page
- Beautiful hero section with animations
- Feature cards with hover effects
- Stats section
- How it works timeline
- Call-to-action sections

### Dashboard
- Career readiness score
- Quick action cards
- Recent activity feed
- Upcoming tasks
- Progress tracking

### Career DNA
- Interactive assessment quiz
- AI-powered career matching
- Detailed career path information
- Salary insights
- Required skills breakdown

### Skill Gap Analysis
- Visual skill gap representation
- Priority-based learning roadmap
- Free resource recommendations
- Progress tracking
- Estimated completion time

### Job Listings
- Smart job matching with scores
- Advanced filters
- Detailed job information
- One-click apply
- Save favorites

### Applications Tracker
- All applications in one place
- Status tracking
- Notes and reminders
- Interview preparation links

---

## 🔐 Security

- Passwords hashed with bcrypt
- JWT-based authentication
- Protected API routes
- CORS configured
- SQL injection prevention
- XSS protection

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👥 Team

- [Your Name] - Team Lead & Backend Developer
- [Team Member 2] - Frontend Developer
- [Team Member 3] - AI/ML Developer
- [Team Member 4] - Full Stack Developer

---

## 📞 Support

For support, email support@careernavigator.com or join our Slack channel.

---

## 🎉 Acknowledgments

- React Team for amazing framework
- Tailwind CSS for beautiful styling
- Framer Motion for smooth animations
- All open-source contributors

---

**Made with ❤️ by CareerNavigator Team**

**Jai Shree Ram! 🙏**
