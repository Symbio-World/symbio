import firebase from '@react-native-firebase/app'
import '@react-native-firebase/functions';
import { ProductData } from 'fetcher-core'

import { createProductViewContainer } from './product-view-container'

export const ProductViewContainer = createProductViewContainer({
  fetchProductData: async barcode => {
    const product = await firebase.functions().httpsCallable('getProduct')({ barcode })
    // @ts-ignore
    return product as ProductData
  },
})
