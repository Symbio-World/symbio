import * as React from 'react'
import { useAuth } from '../auth'
import { ScanBarcodeView } from './ScanBarcodeView'
import { saveBarcode } from './saveBarcode'

type Props = {
  isActive?: boolean
  navigateToProduct?: (barcode: string) => void
}
export const ScanBarcodeViewContainer: React.FC<Props> = ({
  isActive = true,
  navigateToProduct = () => {},
}) => {
  const { user } = useAuth()

  const handleScan = (barcode: string) => {
    if (!user) {
      throw new Error('This should never happen, as user is in the context')
    }
    saveBarcode(user.id, barcode)
    navigateToProduct(barcode)
  }

  return <ScanBarcodeView onScan={handleScan} isActive={isActive} />
}
