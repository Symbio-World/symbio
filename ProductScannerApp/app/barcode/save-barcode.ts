import { EventType } from '@symbio/event-store-core'
import { storeEvent } from '../event'

type SaveBarcode = (userId: string, barcode: string) => Promise<void>
export const saveBarcode: SaveBarcode = async (userId, barcode) =>
  storeEvent({ type: EventType.USER_SCANNED_BARCODE, userId, barcode })
