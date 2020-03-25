import admin from 'firebase-admin'
import { createStoreEvent } from '@symbio/event-store-core'
import { config } from './config'

admin.initializeApp({
  credential: admin.credential.cert(
    require(config.firebaseAdmin.serviceAccountPath),
  ),
  databaseURL: config.firebaseAdmin.databaseUrl,
})

export const storeEvent = createStoreEvent({
  storeEvent: async event => {
    await admin
      .firestore()
      .collection('events')
      .add(event)
  },
})
