import React, { useState } from 'react'
import { View } from 'react-native'
import { ScanBarcodeView } from './scan-barcode-view'
import { ProductViewContainer } from '../product'
import { Modal } from '../ui-kit/modal'
import { useAuth } from '../auth'

type CreateScanBarcodeViewContainer = (deps: Deps) => React.FC<Props>
type Deps = {
  saveBarcode: (userId: string, barcode: string) => Promise<void>
}
type Props = {}
export const createScanBarcodeViewContainer: CreateScanBarcodeViewContainer = ({
  saveBarcode,
}) => () => {
  const { user } = useAuth()
  const [barcode, setBarcode] = useState<string>()

  const handleDismiss = () => {
    setBarcode(undefined)
  }

  const handleScan = (bc: string) => {
    saveBarcode(user!.id, bc)
    setBarcode(bc)
  }

  return (
    <View>
      {barcode && (
        <Modal onDismiss={handleDismiss}>
          <ProductViewContainer barcode={barcode} />
        </Modal>
      )}
      <ScanBarcodeView onScan={handleScan} active={!barcode} />
    </View>
  )
}
