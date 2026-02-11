import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Compass, Menu, X, User, LogOut } from 'lucide-react'
import { useState } from 'react'
import { useAuthStore } from '../store/authStore'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { isAuthenticated, user, logout } = useAuthStore()

  const navLinks = isAuthenticated
    ? [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Career DNA', path: '/career-dna' },
        { name: 'Skill Gap', path: '/skill-gap' },
        { name: 'Jobs', path: '/jobs' },
        { name: 'Applications', path: '/applications' },
      ]
    : [
        { name: 'Features', path: '/#features' },
        { name: 'How It Works', path: '/#how-it-works' },
        { name: 'About', path: '/#about' },
      ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 glass border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-lg"
            >
              <Compass className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-xl font-bold gradient-text">CareerNavigator</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span>{user?.name}</span>
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center space-x-2 text-slate-600 hover:text-red-600 transition-colors"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-secondary">
                  Login
                </Link>
                <Link to="/register" className="btn-primary">
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-slate-200 bg-white"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50"
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    logout()
                    setIsOpen(false)
                  }}
                  className="w-full text-left px-4 py-2 rounded-lg text-red-600 hover:bg-red-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 rounded-lg text-center bg-white border-2 border-blue-600 text-blue-600"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 rounded-lg text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
