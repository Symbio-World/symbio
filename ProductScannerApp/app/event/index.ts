import firestore from '@react-native-firebase/firestore'
import { createStoreEvent } from '@symbio/event-store-core'

export const storeEvent = createStoreEvent({
  storeEvent: async event => {
    await firestore()
      .collection('events')
      .add(event)
  },
})
