import {
  createQueryProductPage,
  QueryProductPageError,
} from './query-product-page'

describe('QueryProductPage', () => {
  it('returns product page data for foodie.fi', async () => {
    console.log(math.add(1, 2))
    const fetch = jest.fn<any, any>(() =>
      Promise.resolve({ data: 'html' }),
    )
    const result = {
      ingredients: 'yogurt',
      allergens: 'milk',
      origin: 'Estonia'
    }
    const parse = jest.fn<any, any>(() => result)
    const productData = await createQueryProductPage({ fetch, parse })('link')
    expect(productData).toEqual(result)
  })

  it('errors when query fails', async () => {
    const fetch = jest.fn(() => Promise.reject(new Error()))
    await expect(
      createQueryProductPage({ fetch, parse: jest.fn() })('link'),
    ).rejects.toThrow(QueryProductPageError)
  })
})
