import auth from '@react-native-firebase/auth'

export const signInAnonymously = async () => {
  const { user } = await auth().signInAnonymously()
  return { id: user.uid }
}
