import { firestore } from '../firestore'
import { EventType } from '@symbio/event-store-core'

export type FetchEmail = (userId: string) => Promise<string | undefined>

export const fetchEmail: FetchEmail = async (userId) => {
  const snapshot = await firestore()
    .collection(EventType.USER_SUBMITTED_EMAIL)
    .where('userId', '==', userId)
    .orderBy('timestamp', 'desc')
    .limit(1)
    .get()

  return snapshot.docs.length > 0 ? snapshot.docs[0].data().email : undefined
}
