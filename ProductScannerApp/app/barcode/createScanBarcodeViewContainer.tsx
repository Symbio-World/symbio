import React, { useState } from 'react'
import { View } from 'react-native'
import { t } from 'react-native-tailwindcss'
import { ScanBarcodeView } from './ScanBarcodeView'
import { ProductViewContainer } from '../product'
import { Modal } from '../ui-kit/Modal'
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
    if (!user) {
      throw new Error('This should never happen, as user is in the context')
    }
    saveBarcode(user.id, bc)
    setBarcode(bc)
  }

  return (
    <View style={[t.flex1]}>
      {barcode && (
        <Modal onDismiss={handleDismiss}>
          <ProductViewContainer barcode={barcode} />
        </Modal>
      )}
      <ScanBarcodeView onScan={handleScan} active={!barcode} />
    </View>
  )
}
