import {
  createQueryProductPage,
  QueryProductPageError,
} from './query-product-page'
import * as foodie from './query-product-page.foodie.fixture'

describe('QueryProductPage', () => {
  it('returns product page data for foodie.fi', async () => {
    const fetch = jest.fn<any, any>(() =>
      Promise.resolve({ data: foodie.httpResponse }),
    )
    const parse = jest.fn<any, any>(() => foodie.result)
    const productData = await createQueryProductPage({ fetch, parse })(foodie.link)
    expect(productData).toEqual(foodie.result)
  })

  it('errors when query fails', async () => {
    const fetch = jest.fn(() => Promise.reject(new Error()))
    await expect(
      createQueryProductPage({ fetch, parse: jest.fn() })(foodie.link),
    ).rejects.toThrow(QueryProductPageError)
  })
})
