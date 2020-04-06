import { fromEventPattern, Observable, throwError } from 'rxjs'
import { map } from 'rxjs/operators'
import { EventType, BarcodeProcessed } from '@symbio/event-store-core'
import { Barcode, ProductData } from '@symbio/barcode-processor-core'
import { firestore } from '../firestore'

// TODO test this
export type ObserveProductData = (barcode: Barcode) => Observable<ProductData>
export const observeProductData: ObserveProductData = (barcode) =>
  fromEventPattern<BarcodeProcessed>(
    (handler) => {
      firestore()
        .collection(EventType.BARCODE_PROCESSED)
        .where('barcode', '==', barcode)
        .limit(1)
        .onSnapshot((snapshot) => {
          if (snapshot.docs.length > 0) {
            const event = snapshot.docs[0].data()
            handler(event)
          }
        })
    },
    (_, unsubscribe) => unsubscribe(),
  ).pipe(
    map((event: BarcodeProcessed) => {
      if (event.error) throw throwError(event.error)
      if (!event.productData)
        throw throwError('Impossible happened, productData is undefined')
      return event.productData
    }),
  )
