import firestore from '@react-native-firebase/firestore'
import { command } from './save-principles'

type FetchPrinciples = (userId: string) => Promise<string[] | null>

export const fetchPrinciples: FetchPrinciples = async userId => {
  const snapshot = await firestore()
    .collection('events')
    .where('command', '==', command)
    .where('userId', '==', userId)
    .get()
  return snapshot.docs.length > 0 ? snapshot.docs[0].data().principles : undefined
}
