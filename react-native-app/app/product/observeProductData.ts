import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { EventType, BarcodeProcessed } from '@symbio/event-store-core'
import { Barcode, ProductData } from '@symbio/barcode-processor-core'
import { firestore } from '../firestore'

// TODO test this
type ObserveProductData = (barcode: Barcode) => Observable<ProductData>
export const observeProductData: ObserveProductData = (barcode) =>
  new Observable<BarcodeProcessed>((subscriber) => {
    const unsubscribe = firestore()
      .collection(EventType.BARCODE_PROCESSED)
      .where('barcode', '==', barcode)
      .limit(1)
      .onSnapshot((snapshot) => {
        if (snapshot.docs.length > 0) {
          const event = snapshot.docs[0].data()
          subscriber.next(event as BarcodeProcessed)
        }
      })
    return () => unsubscribe()
  }).pipe(
    map((event: BarcodeProcessed) => {
      if (event.error) throw event.error
      if (!event.productData)
        throw new Error('Impossible happened, productData is undefined')
      return event.productData
    }),
  )
