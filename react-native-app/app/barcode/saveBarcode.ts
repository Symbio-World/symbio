import { userScannedBarcode } from '@symbio/event-store-core'
import { storeEvent } from '../event'

type SaveBarcode = (userId: string, barcode: string) => Promise<void>
export const saveBarcode: SaveBarcode = (userId, barcode) =>
  storeEvent(userScannedBarcode(userId, barcode))
