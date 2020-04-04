import firestore from '@react-native-firebase/firestore'
import { EventType } from '@symbio/event-store-core'

type FetchPrinciples = (userId: string) => Promise<string[] | null>

export const fetchPrinciples: FetchPrinciples = async (userId) => {
  const snapshot = await firestore()
    .collection(EventType.USER_SELECTED_PRINCIPLES)
    .where('userId', '==', userId)
    .orderBy('timestamp', 'desc')
    .limit(1)
    .get()

  return snapshot.docs.length > 0
    ? snapshot.docs[0].data().principles
    : undefined
}
