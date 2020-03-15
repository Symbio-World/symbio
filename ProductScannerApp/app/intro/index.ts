import firestore from '@react-native-firebase/firestore'
import { createIntroContainer } from './intro-container'

export const IntroContainer = createIntroContainer({
  storeUserTags: async ({ uid }, tags) => {
    await firestore()
    .collection('user-tags')
    .add({ uid, tags })
  },
  tags: [
    'Vegan',
    'Gluten free',
    'Nut free',
    'Lactose free',
    'Halal',
    'Organic',
    'Eco friendly',
  ]
})
