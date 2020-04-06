import admin from 'firebase-admin'
import { config } from './config'

admin.initializeApp({
  credential: admin.credential.cert(
    require(config.firebaseAdmin.serviceAccountPath),
  ),
  databaseURL: config.firebaseAdmin.databaseUrl,
})

export { admin }
