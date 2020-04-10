import { createScanBarcodeViewContainer } from './createScanBarcodeViewContainer'
import { saveBarcode } from './saveBarcode'
export const ScanBarcodeViewContainer = createScanBarcodeViewContainer({
  saveBarcode,
})
