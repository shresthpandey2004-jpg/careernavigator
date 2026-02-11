import express from 'express'
import { authMiddleware } from '../middleware/auth'

const router = express.Router()

// Get career paths
router.get('/paths', authMiddleware, (req, res) => {
  const careerPaths = [
    {
      title: 'Backend Developer',
      matchPercentage: 85,
      salaryRange: { min: 600000, max: 1200000 },
      growthPotential: 'High',
      requiredSkills: ['Node.js', 'Python', 'Databases', 'APIs'],
      description: 'Build server-side applications and APIs',
    },
    {
      title: 'Full Stack Developer',
      matchPercentage: 78,
      salaryRange: { min: 700000, max: 1500000 },
      growthPotential: 'Very High',
      requiredSkills: ['React', 'Node.js', 'MongoDB', 'AWS'],
      description: 'Work on both frontend and backend',
    },
    {
      title: 'Data Analyst',
      matchPercentage: 72,
      salaryRange: { min: 500000, max: 1000000 },
      growthPotential: 'High',
      requiredSkills: ['Python', 'SQL', 'Excel', 'Tableau'],
      description: 'Analyze data to drive business decisions',
    },
  ]

  res.json(careerPaths)
})

export default router
