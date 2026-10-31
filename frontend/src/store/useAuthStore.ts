import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type AuthUser = {
  id: string
  email: string
  name: string
  role: 'ADMIN' | 'CUSTOMER'
}

type AuthState = {
  isAuthenticated: boolean
  user: AuthUser | null
  login: (user: AuthUser) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      login: (user) => set({ isAuthenticated: true, user }),
      logout: () => set({ isAuthenticated: false, user: null }),
    }),
    { name: 'auth' },
  ),
)
