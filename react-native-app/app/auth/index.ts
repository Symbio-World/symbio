import auth from '@react-native-firebase/auth'
import { createAuthProvider } from './authContext'

export { useAuth, User } from './authContext'

export const AuthProvider = createAuthProvider({
  signInAnonymously: async () => {
    const { user } = await auth().signInAnonymously()
    return { id: user.uid }
  },
})
