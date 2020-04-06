import * as Program from './createProcessBarcode'
import * as fixture from './ProductData.fixture'

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
    searchBarcode = jest.fn(() =>
      Promise.resolve({
        name: fixture.productSearchData.name,
        links: fixture.productSearchData.links,
      }),
    )
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
})
