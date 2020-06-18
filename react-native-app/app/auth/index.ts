import { createAuthProvider } from './authContext'
import { signInAnonymously } from './signInAnonymously'
import { fetchEmail } from './fetchEmail'

export { useAuth, User } from './authContext'

export const AuthProvider = createAuthProvider({
  signInAnonymously,
  fetchEmail
})
