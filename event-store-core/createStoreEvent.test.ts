import { createStoreEvent, StoreEvent, Now } from './createStoreEvent'
import { userScannedBarcode, barcodeProcessed, EventType } from './DomainEvent'
import { ProductData } from '@symbio/barcode-processor-core'

describe('createStoreEvent', () => {
  let storeEvent: StoreEvent
  let now: Now
  const timestamp = 1585933810891

  beforeEach(() => {
    storeEvent = jest.fn(() => Promise.resolve())
    now = jest.fn(() => timestamp)
  })

  it('adds timestamp to event', async () => {
    const event = userScannedBarcode('userId', 'barcode')
    await createStoreEvent({ storeEvent, now })(event)
    expect(storeEvent).toHaveBeenCalledWith({
      ...event,
      timestamp,
    })
  })

  it('removes undefined values', async () => {
    const productData: ProductData = {
      links: [],
      ingredients: undefined,
      name: undefined,
    }
    const barcode = 'barcode'
    const event = barcodeProcessed({ barcode, productData })
    await createStoreEvent({ storeEvent, now })(event)
    expect(storeEvent).toHaveBeenCalledWith({
      barcode,
      productData: {
        links: [],
      },
      timestamp,
      type: EventType.BARCODE_PROCESSED,
    })
  })
})
