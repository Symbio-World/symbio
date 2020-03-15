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
    preferredDomains: [],
  }

  it('searches barcode', async () => {
    const barcode = 'test barcode'
    await createFetchProductData(deps)(barcode)
    expect(deps.searchBarcode).toHaveBeenCalledWith(barcode)
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
  it('respects preferred domains', async () => {
    const links = ['https://example.com', 'https://prisma.ee']
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
      preferredDomains: [],
    }

    await createFetchProductData({
      ...deps,
      preferredDomains: ['prisma.ee'],
    })('test barcode')
    expect(queryProductPage).toHaveBeenCalledWith('https://prisma.ee')
  })
})
