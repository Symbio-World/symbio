import axios from 'axios'

import { queryBarcode, QueryBarcodeError } from './query-barcode'
import * as simple from './query-barcode.first-item-contains-all-keys.fixture'
import * as aggregate from './query-barcode.first-item-does-not-contains-all-keys.fixture'

jest.mock('axios')

describe('QueryBarcode', () => {
  it('returns product data', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: simple.testHttpResponse }))
    const product = await queryBarcode(simple.testBarcode)
    expect(product).toEqual(simple.testResult)
  })

  it('aggregates product data', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: aggregate.testHttpResponse }))
    const product = await queryBarcode(aggregate.testBarcode)
    expect(product).toEqual(aggregate.testResult)
  })

  it('errors when query fails', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()))
    await expect(queryBarcode(simple.testBarcode)).rejects.toThrow(QueryBarcodeError)
  });  
})
