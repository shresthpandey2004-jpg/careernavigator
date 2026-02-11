import express from 'express'
import { authMiddleware } from '../middleware/auth'

const router = express.Router()

// Get all jobs
router.get('/', authMiddleware, (req, res) => {
  const jobs = [
    {
      id: '1',
      title: 'Backend Developer',
      company: 'TechCorp',
      location: 'Bangalore',
      salary: { min: 600000, max: 1000000 },
      jobType: 'full-time',
      experienceLevel: 'entry-level',
      matchScore: 85,
      skills: ['Node.js', 'MongoDB', 'Express', 'REST APIs'],
      postedDate: '2024-02-10',
      description: 'Looking for a passionate backend developer to join our growing team.',
    },
    {
      id: '2',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Mumbai',
      salary: { min: 700000, max: 1200000 },
      jobType: 'full-time',
      experienceLevel: 'entry-level',
      matchScore: 78,
      skills: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      postedDate: '2024-02-05',
      description: 'Join our innovative startup and work on cutting-edge projects.',
    },
  ]

  res.json(jobs)
})

// Apply to job
router.post('/:id/apply', authMiddleware, (req, res) => {
  res.json({ message: 'Application submitted successfully' })
})

export default router
