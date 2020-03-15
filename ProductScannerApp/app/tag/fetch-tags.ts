import firestore from '@react-native-firebase/firestore'
import { command } from './save-tags'

type FetchTags = (userId: string) => Promise<string[] | null>

export const fetchTags: FetchTags = async userId => {
  const snapshot = await firestore()
    .collection('events')
    .where('command', '==', command)
    .where('userId', '==', userId)
    .get()
  return snapshot.docs.length > 0 ? snapshot.docs[0].data().tags : undefined
}
