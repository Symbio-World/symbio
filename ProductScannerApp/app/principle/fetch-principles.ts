import firestore from '@react-native-firebase/firestore'

type FetchPrinciples = (userId: string) => Promise<string[] | null>

export const fetchPrinciples: FetchPrinciples = async userId => {
  const snapshot = await firestore()
    .collection('events')
    .where('userId', '==', userId)
    .orderBy('timestamp', 'desc')
    .orderBy('principles')
    .limit(1)
    .get()
  return snapshot.docs.length > 0
    ? snapshot.docs[0].data().principles
    : undefined
}
