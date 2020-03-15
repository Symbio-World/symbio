import firestore from '@react-native-firebase/firestore'
import { createSetupTagsScreenContainer } from './setup-tags-screen-container'
import { saveTags } from './save-tags'

export { fetchTags } from './fetch-tags'
export const SetupTagsScreenContainer = createSetupTagsScreenContainer({
  saveTags,
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
