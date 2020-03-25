import { storeEvent } from '../event'

type SaveBarcode = (userId: string, barcode: string) => Promise<void>
export const saveBarcode: SaveBarcode = async (userId, barcode) =>
  storeEvent({ userId, barcode })
