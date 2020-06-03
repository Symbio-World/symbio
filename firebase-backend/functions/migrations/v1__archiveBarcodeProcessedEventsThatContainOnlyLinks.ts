import {
  EventType,
  BarcodeProcessed,
  barcodeProcessedEventArchived,
  ArchiveReason,
} from '@symbio/event-store-core'
import { admin } from '../admin'
import { storeEvent } from '../storeEvent'

const shouldEventBeArchived = ({ productData, error }: BarcodeProcessed) =>
  productData &&
  !productData.name &&
  !productData.description &&
  !productData.image &&
  !productData.ingredients &&
  (!productData.allergens || productData.allergens.length === 0) &&
  !productData.origin &&
  !error

export const migrate = async () => {
  const snapshot = await admin
    .firestore()
    .collection(EventType.BARCODE_PROCESSED)
    .get()

  let count = 0
  for (const doc of snapshot.docs) {
    const barcodeProcessedEvent = doc.data() as BarcodeProcessed
    if (shouldEventBeArchived(barcodeProcessedEvent)) {
      await storeEvent(
        barcodeProcessedEventArchived(
          barcodeProcessedEvent,
          ArchiveReason.PRODUCT_DATA_CONTAINS_ONLY_LINKS,
        ),
      )
      await doc.ref.delete()
      count++
    }
  }

  console.log(`${count} events changed`)
}
