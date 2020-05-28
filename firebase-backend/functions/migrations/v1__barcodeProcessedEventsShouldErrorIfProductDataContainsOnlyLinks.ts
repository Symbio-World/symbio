import {
  EventType,
  BarcodeProcessed,
  barcodeProcessed,
} from '@symbio/event-store-core'
import { removeUndefined } from '@symbio/ts-lib'
import { admin } from '../admin'
import { processBarcode } from '../'

const processBarcodeWithError = async (
  barcode: string,
): Promise<BarcodeProcessed> => {
  try {
    const productData = await processBarcode(barcode)
    return barcodeProcessed(barcode, productData)
  } catch (error) {
    return barcodeProcessed(barcode, undefined, error)
  }
}

export const migrate = async () => {
  let snapshot = await admin
    .firestore()
    .collection(EventType.BARCODE_PROCESSED)
    .get()

  let count = 0

  for (let doc of snapshot.docs) {
    const { productData, error, barcode } = doc.data() as BarcodeProcessed
    if (
      productData &&
      !productData.name &&
      !productData.description &&
      !productData.image &&
      !productData.ingredients &&
      (!productData.allergens || productData.allergens.length === 0) &&
      !productData.origin &&
      !error
    ) {
      count++
      const updatedEvent = removeUndefined(
        await processBarcodeWithError(barcode),
      )
      doc.ref.set(updatedEvent)
    }
  }

  console.log(`${count} events changed`)
}
