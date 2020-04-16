import * as React from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { t } from 'react-native-tailwindcss'
import { ScanBarcodeView } from './ScanBarcodeView'
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
  const navigation = useNavigation()
  const [isActive, setIsActive] = React.useState<boolean>(true)

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setIsActive(true)
    });

    return unsubscribe;
  }, [navigation]);

  const handleScan = (barcode: string) => {
    if (!user) {
      throw new Error('This should never happen, as user is in the context')
    }
    setIsActive(false)
    saveBarcode(user.id, barcode)
    navigation.navigate('ProductViewScreen', { barcode })
  }

  return (
    <View style={[t.flex1]}>
      <ScanBarcodeView onScan={handleScan} isActive={isActive} />
    </View>
  )
}
