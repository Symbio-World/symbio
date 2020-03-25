import { createScanBarcodeViewContainer } from './scan-barcode-view-container'
import { saveBarcode } from './save-barcode'
export const ScanBarcodeViewContainer = createScanBarcodeViewContainer({
  saveBarcode
})
