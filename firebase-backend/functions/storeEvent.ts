import { admin } from './admin'
import { createStoreEvent } from '@symbio/event-store-core'

export const storeEvent = createStoreEvent({
  storeEvent: async (event) => {
    await admin.firestore().collection(event.type).add(event)
  },
})
