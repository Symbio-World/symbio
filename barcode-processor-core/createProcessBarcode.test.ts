import { pipe } from 'fp-ts/lib/pipeable'
import * as TE from 'fp-ts/lib/TaskEither'
import * as T from 'fp-ts/lib/Task'
import * as E from 'fp-ts/lib/Either'
import * as CPB from './createProcessBarcode'
import * as Model from './model'
import * as fixture from './productData.fixture'

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
      TE.right({ name: fixture.name, links: fixture.links }),
    )
    fetchProductPage = jest.fn(link =>
      T.of({ link, html: 'html' as Model.Html }),
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
    pipe(
      e,
      E.fold(
        e => {
          throw e
        },
        productData => {
          expect(productData).toEqual(fixture.translated)
        },
      ),
    )
  })
})
