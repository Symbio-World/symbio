import { TE, E, t } from '@symbio/ts-lib'
import * as CPB from './createProcessBarcode'
import * as PD from './ProductData'
import * as fixture from './ProductData.fixture'

describe('createProcessBarcode', () => {
  let searchBarcode: CPB.SearchBarcode
  let fetchProductPage: CPB.FetchProductPage
  let scrapeProductPage: CPB.ScrapeProductPage
  let translateProductData: CPB.TranslateProductData
  let deps: CPB.Deps

  const scrapeFirstPage: CPB.ScrapeProductPage = () => ({
    ingredients: fixture.ingredients,
  })

  beforeEach(() => {
    searchBarcode = jest.fn(() =>
      TE.right({
        name: fixture.name,
        links: fixture.links as t.NonEmptyArray<PD.Link>,
      }),
    )
    fetchProductPage = jest.fn(link =>
      TE.right({ link, html: 'html' as PD.Html }),
    )
    scrapeProductPage = jest.fn(scrapeFirstPage)
    translateProductData = jest.fn(() => TE.right(fixture.translated))
    deps = {
      searchBarcode,
      fetchProductPage,
      scrapeProductPage,
      translateProductData,
    }
  })

  it('searches barcode', async () => {
    await CPB.createProcessBarcode(deps)(fixture.barcode)()

    expect(searchBarcode).toHaveBeenCalledWith(fixture.barcode)
  })

  it('fetches all product pages', async () => {
    await CPB.createProcessBarcode(deps)(fixture.barcode)()

    expect(fetchProductPage).toHaveBeenCalledTimes(fixture.links.length)
  })

  it('translates data', async () => {
    await CPB.createProcessBarcode(deps)(fixture.barcode)()

    expect(translateProductData).toHaveBeenCalledWith(fixture.productData)
  })

  it('aggregates data from all pages', async () => {
    const origin = 'Finland'
    const scrapeSecondPage: CPB.ScrapeProductPage = () => ({
      ingredients: 'discard',
      origin,
    })
    ;(scrapeProductPage as jest.Mock)
      .mockImplementationOnce(scrapeFirstPage)
      .mockImplementationOnce(scrapeSecondPage)

    await CPB.createProcessBarcode(deps)(fixture.barcode)()

    expect(translateProductData).toHaveBeenCalledWith({
      ...fixture.productData,
      origin,
    })
  })

  it('returns translated product data', async () => {
    const e = await CPB.createProcessBarcode(deps)(fixture.barcode)()
    expect(e).toEqual(E.right(fixture.translated))
  })
})
