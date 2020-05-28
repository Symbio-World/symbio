import { EventType, BarcodeProcessed } from '@symbio/event-store-core'
import { processCollection } from './processCollection'

type BarcodeProcessedEvent = BarcodeProcessed & {
  timestamp: number
}
let count = 0
const reprocessBarcodeProcessedEvents = async (event: BarcodeProcessedEvent) => {
  count++
  console.log(count, event.timestamp)
}

processCollection(EventType.BARCODE_PROCESSED, reprocessBarcodeProcessedEvents)
