import functions from '@react-native-firebase/functions'
import { ProductData } from '@symbio/barcode-processor-core'

import { createProductViewContainer } from './createProductViewContainer'

export const ProductViewContainer = createProductViewContainer({
  processBarcode: async (barcode) => {
    const product = await functions().httpsCallable('getProduct')({ barcode })
    return product.data as ProductData
  },
})
