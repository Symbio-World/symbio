import admin from 'firebase-admin'
import { createStoreEvent } from 'event-store-core'
import { env } from './env'

admin.initializeApp({
  credential: admin.credential.cert(
    require(env.firebaseAdmin.serviceAccountPath),
  ),
  databaseURL: env.firebaseAdmin.databaseUrl,
})

export const storeEvent = createStoreEvent({
  storeEvent: async event => {
    await admin
      .firestore()
      .collection('events')
      .add(event)
  },
})
