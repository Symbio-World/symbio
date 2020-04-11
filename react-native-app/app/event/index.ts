import { createStoreEvent } from '@symbio/event-store-core'
import { firestore } from '../firestore'

export const storeEvent = createStoreEvent({
  storeEvent: async (event) => {
    await firestore().collection(event.type).add(event)
  },
})
