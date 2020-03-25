import {
  createSearchBarcode,
  SearchBarcodeError,
  NoDataFoundError,
} from './search-barcode'
import * as simple from './search-barcode.first-item-contains-all-keys.fixture'
import * as aggregate from './search-barcode.first-item-does-not-contains-all-keys.fixture'
import * as noData from './search-barcode.no-items.fixture'

describe('SearchBarcode', () => {
  it('returns product data', async () => {
    const fetchSearchResponse = jest.fn<any, any>(() =>
      Promise.resolve(simple.httpResponse),
    )
    const product = await createSearchBarcode({ fetchSearchResponse })(
      simple.barcode,
    )
    expect(product).toEqual(simple.result)
  })

  it('aggregates product data', async () => {
    const fetchSearchResponse = jest.fn<any, any>(() =>
      Promise.resolve(aggregate.httpResponse),
    )
    const product = await createSearchBarcode({ fetchSearchResponse })(
      aggregate.barcode,
    )
    expect(product).toEqual(aggregate.result)
  })

  it('if no data is found throws error', async () => {
    const fetchSearchResponse = jest.fn<any, any>(() =>
      Promise.resolve(noData.httpResponse),
    )
    await expect(
      createSearchBarcode({ fetchSearchResponse })(noData.barcode),
    ).rejects.toThrow(NoDataFoundError)
  })

  it('errors when query fails', async () => {
    const fetchSearchResponse = jest.fn<any, any>(() =>
      Promise.reject(new Error()),
    )
    await expect(
      createSearchBarcode({ fetchSearchResponse })(simple.barcode),
    ).rejects.toThrow(SearchBarcodeError)
  })
})
