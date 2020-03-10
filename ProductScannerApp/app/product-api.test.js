import axios from 'axios'

import { translator } from './translator'
import { fetchProduct } from './product-api'
import {
  ApiError,
  testBarcode,
  testSuccessHttpResponse,
  testFailedHttpResponse
} from './product-api.fixture'
import { testProduct, testTranslatedProduct } from './product.fixture'

jest.mock('axios')
jest.mock('./translator')

describe('ProductApi', () => {
  it('errors with api error when query barcode fails', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()))
    await expect(fetchProduct(testBarcode)).rejects.toThrow(ApiError)
  });
  
  it('queries and translates product', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: testSuccessHttpResponse }))
    translator.translate.mockImplementationOnce(() => Promise.resolve(`${testTranslatedProduct.name};;${testTranslatedProduct.description}`))
    const product = await fetchProduct(testProduct)
    expect(product).toEqual(testTranslatedProduct)
  })
  
  it('errors with api error when translations fails', async () => {
    translator.translate.mockImplementationOnce(() => Promise.reject(new Error()))
    await expect(fetchProduct(testBarcode)).rejects.toThrow(ApiError);
  })
})
