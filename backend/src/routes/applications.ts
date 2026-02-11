import express from 'express'
import { authMiddleware } from '../middleware/auth'

const router = express.Router()

// Get all applications
router.get('/', authMiddleware, (req, res) => {
  const applications = [
    {
      id: '1',
      job: {
        title: 'Backend Developer',
        company: 'TechCorp',
        location: 'Bangalore',
      },
      status: 'interview',
      appliedDate: '2024-01-15',
      lastUpdated: '2024-01-20',
      notes: 'Interview scheduled for next week',
    },
  ]

  res.json(applications)
})

export default router
