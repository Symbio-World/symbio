import { createFetchProductData } from './fetch-product-data'

describe('FetchProductData', () => {
  const links = ['https://example.com']
  const searchBarcode = jest.fn<any, any>(() =>
    Promise.resolve({
      name: 'Ola',
      links,
    }),
  )
  const queryProductPage = jest.fn<any, any>(() =>
    Promise.resolve({
      data: 'Mundo',
    }),
  )
  const translateObject = jest.fn<any, any>(() =>
    Promise.resolve({
      name: 'Hello',
      links,
      data: 'World',
    }),
  )
  const deps = {
    searchBarcode,
    queryProductPage,
    translateObject,
  }

  it('searches barcode', async () => {
    const testBarcode = 'test barcode'
    await createFetchProductData(deps)(testBarcode)
    expect(deps.searchBarcode).toHaveBeenCalledWith(testBarcode)
  })

  it('grabs additional data from product page', async () => {
    await createFetchProductData(deps)('test barcode')
    expect(queryProductPage).toHaveBeenCalledWith(links[0])
  })

  it('combines and translates data', async () => {
    const product = await createFetchProductData(deps)('test barcode')
    expect(product).toEqual({
      name: 'Hello',
      links,
      data: 'World',
    })
  })
})
