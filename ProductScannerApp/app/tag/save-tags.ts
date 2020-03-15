import firestore from '@react-native-firebase/firestore'

type SaveTags = (userId: string, tags: string[]) => Promise<void>

export const command = 'saveTags'
export const saveTags: SaveTags = async (userId, tags) => {
  await firestore()
    .collection('events')
    .add({ userId, command: 'saveTags', tags })
}
