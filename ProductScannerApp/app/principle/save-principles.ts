import firestore from '@react-native-firebase/firestore'

type SavePrinciples = (userId: string, principles: string[]) => Promise<void>

export const command = 'savePrinciples'
export const savePrinciples: SavePrinciples = async (userId, principles) => {
  await firestore()
    .collection('events')
    .add({ userId, command, principles })
}
