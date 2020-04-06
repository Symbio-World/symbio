import { EventType } from '@symbio/event-store-core'
import { Barcode } from '@symbio/barcode-processor-core'
import { admin } from './admin'

export const isBarcodeProcessed = async (barcode: Barcode) => {
  const snapshot = await admin
    .firestore()
    .collection(EventType.BARCODE_PROCESSED)
    .where('barcode', '==', barcode)
    .limit(1)
    .get()

  const isProcessed = snapshot.docs.length > 0
  return isProcessed
}
