import firestore from '@react-native-firebase/firestore'
import { createSetupTagsScreenContainer } from './setup-tags-screen-container'

export const SetupTagsScreenContainer = createSetupTagsScreenContainer({
  storeUserTags: async ({ uid }, tags) => {
    await firestore()
      .collection('user-tags')
      .doc(uid)
      .set({ tags })
      .catch(console.log)
  },
  tags: [
    'Vegan',
    'Gluten free',
    'Nut free',
    'Lactose free',
    'Halal',
    'Organic',
    'Eco friendly',
  ],
})
