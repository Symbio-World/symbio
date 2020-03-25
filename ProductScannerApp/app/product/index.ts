import functions from '@react-native-firebase/functions';
import { ProductData } from '@symbio/conveyor-core'

import { createProductViewContainer } from './product-view-container'

export const ProductViewContainer = createProductViewContainer({
  fetchProductData: async barcode => {
    console.log('barcode', barcode)
    const product = await functions().httpsCallable('getProduct')({ barcode })
    console.log('product', product)
    // @ts-ignore
    return product as ProductData
  },
})
