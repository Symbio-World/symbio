import { createFetchProductData, Deps } from './fetch-product-data'
import { SearchBarcode } from './search-barcode'
import { QueryProductPage } from './query-product-page'
import { TranslateObject } from './translate'

describe('FetchProductData', () => {
  let searchBarcode: SearchBarcode
  let queryProductPage: QueryProductPage
  let translateObject: TranslateObject
  let deps: Deps

  let links = ['link1', 'link2']
  let initialProductData = {
    name: 'Ola',
    links,
  }
  let productPageData = {
    data: 'Mundo',
  }
  let translatedObject = {
    name: 'Hello',
    data: 'World',
  }

  beforeEach(() => {
    searchBarcode = jest.fn<any, any>(() => Promise.resolve(initialProductData))
    queryProductPage = jest.fn<any, any>(() => Promise.resolve(productPageData))
    translateObject = jest.fn<any, any>(() => Promise.resolve(translatedObject))
    deps = {
      searchBarcode,
      queryProductPage,
      translateObject,
    }
  })

  it('searches barcode', async () => {
    const barcode = 'test barcode'
    await createFetchProductData(deps)(barcode)
    expect(searchBarcode).toHaveBeenCalledWith(barcode)
  })

  it('grabs additional data from all product pages', async () => {
    await createFetchProductData(deps)('test barcode')
    expect(queryProductPage).toHaveBeenCalledTimes(links.length)
  })

  it('aggregates data from all pages', async () => {
    ;(queryProductPage as jest.Mock)
      .mockImplementationOnce(() => Promise.resolve(productPageData))
      .mockImplementationOnce(
        () => Promise.resolve({ data: 'discard', otherData: 'keep' }),
      )
    await createFetchProductData(deps)('test barcode')
    expect(translateObject).toHaveBeenCalledWith({
      name: 'Ola',
      data: 'Mundo',
      otherData: 'keep',
    })
  })

  it('translates data', async () => {
    await createFetchProductData(deps)('test barcode')
    expect(translateObject).toHaveBeenCalledWith({
      name: 'Ola',
      data: 'Mundo',
    })
  })

  it('returns product', async () => {
    const product = await createFetchProductData(deps)('test barcode')
    expect(product).toEqual({
      name: 'Hello',
      links,
      data: 'World',
    })
  })
})
