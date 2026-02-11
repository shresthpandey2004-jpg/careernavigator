import express from 'express'
import { authMiddleware, AuthRequest } from '../middleware/auth'

const router = express.Router()

// Get profile
router.get('/', authMiddleware, async (req: AuthRequest, res) => {
  res.json({ message: 'Profile endpoint - Coming soon' })
})

// Update profile
router.put('/', authMiddleware, async (req: AuthRequest, res) => {
  res.json({ message: 'Profile updated' })
})

export default router
