import { createSearchBarcode, SearchBarcodeError, NoDataFoundError } from './search-barcode'
import * as simple from './search-barcode.first-item-contains-all-keys.fixture'
import * as aggregate from './search-barcode.first-item-does-not-contains-all-keys.fixture'
import * as noData from './search-barcode.no-items.fixture'

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

  it('if no data is found throws error', async () => {
    const fetch = jest.fn<any, any>(() =>
      Promise.resolve({ data: noData.httpResponse }),
    )
    await expect(createSearchBarcode({ fetch, ...otherDeps })(
      noData.barcode,
    )).rejects.toThrow(NoDataFoundError)
  })

  it('errors when query fails', async () => {
    const fetch = jest.fn<any, any>(() => Promise.reject(new Error()))
    await expect(
      createSearchBarcode({ fetch, ...otherDeps })(simple.barcode),
    ).rejects.toThrow(SearchBarcodeError)
  })
})
