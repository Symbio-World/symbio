import {
  createQueryProductPage,
  QueryProductPageError,
} from './query-product-page'
import {
  testFoodieLink,
  testFoodieHttpResponse,
  testFoodieResult,
} from './query-product-page.foodie.fixture'

describe('QueryProductPage', () => {
  it('returns product page data for foodie.fi', async () => {
    const fetch = jest.fn<any, any>(() =>
      Promise.resolve({ data: testFoodieHttpResponse }),
    )
    const productData = await createQueryProductPage({ fetch })(testFoodieLink)
    expect(productData).toEqual(testFoodieResult)
  })

  it('errors when query fails', async () => {
    const fetch = jest.fn<any, any>(() => Promise.reject(new Error()))
    await expect(
      createQueryProductPage({ fetch })(testFoodieLink),
    ).rejects.toThrow(QueryProductPageError)
  })
})
