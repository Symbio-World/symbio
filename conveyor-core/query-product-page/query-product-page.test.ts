import {
  createQueryProductPage,
  QueryProductPageError,
} from './query-product-page'

describe('QueryProductPage', () => {
  it('returns product page data', async () => {
    const fetchProductPage = jest.fn<any, any>(() => Promise.resolve('html'))
    const result = {
      ingredients: 'yogurt',
      allergens: 'milk',
      origin: 'Estonia',
    }
    const parseProductPage = jest.fn<any, any>(() => result)
    const productData = await createQueryProductPage({
      fetchProductPage,
      parseProductPage,
    })('link')
    expect(productData).toEqual(result)
  })

  it('errors when query fails', async () => {
    const fetchProductPage = jest.fn(() => Promise.reject(new Error()))
    await expect(
      createQueryProductPage({ fetchProductPage, parseProductPage: jest.fn() })(
        'link',
      ),
    ).rejects.toThrow(QueryProductPageError)
  })
})
