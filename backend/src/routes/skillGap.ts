import express from 'express'
import { authMiddleware } from '../middleware/auth'

const router = express.Router()

router.post('/analyze', authMiddleware, (req, res) => {
  res.json({ message: 'Skill gap analysis - Coming soon' })
})

export default router
