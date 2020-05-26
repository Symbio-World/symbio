import * as Program from './createProcessBarcode'
import * as fixture from './ProductData.fixture'
import { noUsefulInfoFound } from './failures'

describe('createProcessBarcode', () => {
  let searchBarcode: Program.SearchBarcode
  let fetchProductPage: Program.FetchProductPage
  let scrapeProductPage: Program.ScrapeProductPage
  let translateProductData: Program.TranslateProductData
  let deps: Program.Deps

  const scrapeFirstPage: Program.ScrapeProductPage = () => ({
    ingredients: fixture.productPageData.ingredients,
  })
  const defaultFetchProductPage: Program.FetchProductPage = (link) =>
    Promise.resolve({ link, html: `html from ${link}` })

  beforeEach(() => {
    searchBarcode = jest.fn(() => Promise.resolve(fixture.productSearchData))
    fetchProductPage = jest.fn(defaultFetchProductPage)
    scrapeProductPage = jest.fn(scrapeFirstPage)
    translateProductData = jest.fn(() =>
      Promise.resolve(fixture.translatedProductData),
    )
    deps = {
      searchBarcode,
      fetchProductPage,
      scrapeProductPage,
      translateProductData,
    }
  })

  it('searches barcode', async () => {
    await Program.createProcessBarcode(deps)(fixture.barcode)
    expect(searchBarcode).toHaveBeenCalledWith(fixture.barcode)
  })

  it('fetches all product pages', async () => {
    await Program.createProcessBarcode(deps)(fixture.barcode)
    expect(fetchProductPage).toHaveBeenCalledTimes(
      fixture.productSearchData.links.length,
    )
  })

  it('translates data', async () => {
    await Program.createProcessBarcode(deps)(fixture.barcode)
    expect(translateProductData).toHaveBeenCalledWith(fixture.productData)
  })

  it('aggregates data from all pages', async () => {
    const origin = 'Finland'
    const scrapeSecondPage: Program.ScrapeProductPage = () => ({
      ingredients: 'discard',
      origin,
    })
    ;(scrapeProductPage as jest.Mock)
      .mockImplementationOnce(scrapeFirstPage)
      .mockImplementationOnce(scrapeSecondPage)

    await Program.createProcessBarcode(deps)(fixture.barcode)

    expect(translateProductData).toHaveBeenCalledWith({
      ...fixture.productData,
      origin,
    })
  })

  it('returns translated product data', async () => {
    const productData = await Program.createProcessBarcode(deps)(
      fixture.barcode,
    )
    expect(productData).toEqual(fixture.translatedProductData)
  })

  it('handles fetch product page failure', async () => {
    ;(fetchProductPage as jest.Mock)
      .mockImplementationOnce(defaultFetchProductPage)
      .mockImplementationOnce(() => Promise.reject())
    const productData = await Program.createProcessBarcode(deps)(
      fixture.barcode,
    )
    expect(productData).toEqual(fixture.translatedProductData)
  })

  it('throws noUsefulInfoFound error if productData only contains links', async () => {
    const onlyLinksProductData = {
      links: ['http://link1.com', 'http://link2.com'],
    }
    ;(searchBarcode as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve(onlyLinksProductData),
    )
    ;(scrapeProductPage as jest.Mock).mockImplementation(() => ({}))
    ;(translateProductData as jest.Mock).mockImplementationOnce(() =>
      Promise.reject('should fail before this step'),
    )
    await expect(Program.createProcessBarcode(deps)(
      fixture.barcode,
    )).rejects.toEqual(noUsefulInfoFound(fixture.barcode, onlyLinksProductData))
  })
})
