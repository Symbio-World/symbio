import firestore from '@react-native-firebase/firestore'
import { createSetupTagsViewContainer } from './setup-tags-view-container'
import { saveTags } from './save-tags'

export { fetchTags } from './fetch-tags'
export const SetupTagsViewContainer = createSetupTagsViewContainer({
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
