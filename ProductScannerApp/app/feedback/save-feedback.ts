import firestore from '@react-native-firebase/firestore'

type SaveFeedback = (userId: string, feedback: string) => Promise<void>

export const command = 'saveFeedback'
export const saveFeedback: SaveFeedback = async (userId, feedback) => {
  await firestore()
    .collection('events')
    .add({ userId, command, feedback })
}
