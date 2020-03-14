import auth from '@react-native-firebase/auth'
import { createAuthProvider } from './auth-context'

export { useAuth } from './auth-context'

export const AuthProvider = createAuthProvider({
  signInAnonymously: () => auth().signInAnonymously()
})

