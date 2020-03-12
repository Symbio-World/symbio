import axios from 'axios'

import { queryProductPage, QueryProductPageError } from './query-product-page'
import {
  testFoodieLink,
  testFoodieHttpResponse,
  testFoodieResult,
} from './query-product-page.foodie.fixture'

jest.mock('axios')

describe('QueryProductPage', () => {
  it('errors with api error when query barcode fails', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()))
    await expect(queryProductPage(testFoodieLink)).rejects.toThrow(QueryProductPageError)
  });  

  it('returns product page data for foodie.fi', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: testFoodieHttpResponse }))
    const productData = await queryProductPage(testFoodieLink)
    expect(productData).toEqual(testFoodieResult)
  })
})
