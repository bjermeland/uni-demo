import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface AuthState {
  accessToken: string
  setAccessToken: (accessToken: string) => void
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      set => ({
        accessToken: '',
        setAccessToken: accessToken => set({ accessToken }),
      }),
      {
        name: 'auth-storage',
      },
    ),
  ),
)
