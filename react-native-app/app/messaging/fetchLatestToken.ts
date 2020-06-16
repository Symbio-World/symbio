import { firestore } from '../firestore'
import { EventType } from '@symbio/event-store-core'

type FetchLatestToken = (userId: string) => Promise<string | undefined>

export const fetchLatestToken: FetchLatestToken = async (userId) => {
  const snapshot = await firestore()
    .collection(EventType.NOTIFICATION_TOKEN_GENERATED)
    .where('userId', '==', userId)
    .orderBy('timestamp', 'desc')
    .limit(1)
    .get()

  return snapshot.docs.length > 0 ? snapshot.docs[0].data().token : undefined
}
