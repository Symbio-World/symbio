import firestore from '@react-native-firebase/firestore'
import { createStoreEvent } from 'event-store-core'

export const storeEvent = createStoreEvent({
  storeEvent: async event => {
    await firestore()
      .collection('events')
      .add(event)
  },
})
