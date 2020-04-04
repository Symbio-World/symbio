import functions from '@react-native-firebase/functions';
import { ProductData } from '@symbio/barcode-processor-core'

import { createProductViewContainer } from './product-view-container'

export const ProductViewContainer = createProductViewContainer({
  processBarcode: async barcode => {
    console.log('barcode', barcode)
    const product = await functions().httpsCallable('getProduct')({ barcode })
    console.log('product', product)
    // @ts-ignore
    return product.data as ProductData
  },
})
