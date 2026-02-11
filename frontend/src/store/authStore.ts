import { create } from 'zustand'

interface User {
  id: string
  name: string
  email: string
  profileComplete: boolean
}

interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  login: (user: User, token: string) => void
  logout: () => void
  updateUser: (user: Partial<User>) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  login: (user, token) => {
    set({ user, token, isAuthenticated: true })
    localStorage.setItem('auth-storage', JSON.stringify({ user, token, isAuthenticated: true }))
  },
  logout: () => {
    set({ user: null, token: null, isAuthenticated: false })
    localStorage.removeItem('auth-storage')
  },
  updateUser: (userData) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...userData } : null,
    })),
}))
