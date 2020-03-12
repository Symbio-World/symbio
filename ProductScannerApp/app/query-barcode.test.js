import axios from 'axios'

import { queryBarcode, QueryBarcodeError } from './query-barcode'
import {
  testBarcode,
  testHttpResponse,
  testResult,
} from './query-barcode.fixture'

jest.mock('axios')

describe('QueryBarcode', () => {
  it('returns product data', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: testHttpResponse }))
    const product = await queryBarcode(testBarcode)
    expect(product).toEqual(testResult)
  })

  it('errors with api error when query barcode fails', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()))
    await expect(queryBarcode(testBarcode)).rejects.toThrow(QueryBarcodeError)
  });  
})
