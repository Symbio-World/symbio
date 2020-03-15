import { createSearchBarcode, SearchBarcodeError } from './search-barcode'
import * as simple from './search-barcode.first-item-contains-all-keys.fixture'
import * as aggregate from './search-barcode.first-item-does-not-contains-all-keys.fixture'

describe('SearchBarcode', () => {
  const otherDeps = { url: '', key: '', cx: '' }

  it('returns product data', async () => {
    const fetch = jest.fn<any, any>(() =>
      Promise.resolve({ data: simple.httpResponse }),
    )
    const product = await createSearchBarcode({ fetch, ...otherDeps })(
      simple.barcode,
    )
    expect(product).toEqual(simple.result)
  })

  it('aggregates product data', async () => {
    const fetch = jest.fn<any, any>(() =>
      Promise.resolve({ data: aggregate.httpResponse }),
    )
    const product = await createSearchBarcode({ fetch, ...otherDeps })(
      aggregate.barcode,
    )
    expect(product).toEqual(aggregate.result)
  })

  it('errors when query fails', async () => {
    const fetch = jest.fn<any, any>(() => Promise.reject(new Error()))
    await expect(
      createSearchBarcode({ fetch, ...otherDeps })(simple.barcode),
    ).rejects.toThrow(SearchBarcodeError)
  })
})
