import auth from '@react-native-firebase/auth'
import { createAuthProvider } from './auth-context'

export { useAuth, User } from './auth-context'

export const AuthProvider = createAuthProvider({
  signInAnonymously: async () => {
    const { user } = await auth().signInAnonymously()
    return { id: user.uid }
  },
})
