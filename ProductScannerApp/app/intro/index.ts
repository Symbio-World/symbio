import firestore from '@react-native-firebase/firestore'
import { createIntroContainer } from './intro-container'

export const IntroContainer = createIntroContainer({
  storeUserTags: async ({ uid }, tags) => {
    await firestore()
    .collection('user-tags')
    .add({ uid, tags })
  }
})
