import * as React from 'react'
import { useAuth } from '../auth'
import { ScanBarcodeView } from './ScanBarcodeView'
import { saveBarcode } from './saveBarcode'

type Props = {
  isActive?: boolean
  onScan?: (barcode: string) => void
}
export const ScanBarcodeViewContainer: React.FC<Props> = ({
  isActive = true,
  onScan = () => {},
}) => {
  const { user } = useAuth()

  const handleScan = (barcode: string) => {
    if (!user) {
      throw new Error('This should never happen, as user is in the context')
    }
    saveBarcode(user.id, barcode)
    onScan(barcode)
  }

  return <ScanBarcodeView onScan={handleScan} isActive={isActive} />
}
