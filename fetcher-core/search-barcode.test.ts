import { createSearchBarcode, SearchBarcodeError } from './search-barcode'
import * as simple from './search-barcode.first-item-contains-all-keys.fixture'
import * as aggregate from './search-barcode.first-item-does-not-contains-all-keys.fixture'

describe('SearchBarcode', () => {
  const otherDeps = { url: '', key: '', cx: '' }

  it('returns product data', async () => {
    const fetch = jest.fn<any, any>(() =>
      Promise.resolve({ data: simple.testHttpResponse }),
    )
    const product = await createSearchBarcode({ fetch, ...otherDeps })(
      simple.testBarcode,
    )
    expect(product).toEqual(simple.testResult)
  })

  it('aggregates product data', async () => {
    const fetch = jest.fn<any, any>(() =>
      Promise.resolve({ data: aggregate.testHttpResponse }),
    )
    const product = await createSearchBarcode({ fetch, ...otherDeps })(
      aggregate.testBarcode,
    )
    expect(product).toEqual(aggregate.testResult)
  })

  it('errors when query fails', async () => {
    const fetch = jest.fn<any, any>(() => Promise.reject(new Error()))
    await expect(
      createSearchBarcode({ fetch, ...otherDeps })(simple.testBarcode),
    ).rejects.toThrow(SearchBarcodeError)
  })
})
