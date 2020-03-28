import { pipe } from 'fp-ts/lib/pipeable'
import * as TE from 'fp-ts/lib/TaskEither'
import * as T from 'fp-ts/lib/Task'
import * as CPB from './createProcessBarcode'
import * as Model from './model'

describe('createProcessBarcode', () => {
  let searchBarcode: CPB.SearchBarcode
  let fetchProductPage: CPB.FetchProductPage
  let scrapeProductPage: CPB.ScrapeProductPage
  let translateProductData: CPB.TranslateProductData
  let steps: CPB.Steps

  const barcode = '5782412334' as Model.Barcode
  const name = 'Margariini'
  const links = ['http://link1.com', 'http://link2.com'] as Model.Link[]
  const ingredients = 'Vesi'
  const translatedName = 'Margarin'
  const translatedIngredients = 'Water'
  const translated = {
    name: translatedName,
    links,
    ingredients: translatedIngredients,
  }

  const scrapeFirstPage: CPB.ScrapeProductPage = () => ({ ingredients })

  beforeEach(() => {
    searchBarcode = jest.fn(() => TE.right({ name, links }))
    fetchProductPage = jest.fn(link =>
      T.of({ link, html: 'html' as Model.Html }),
    )
    scrapeProductPage = jest.fn(scrapeFirstPage)
    translateProductData = jest.fn(() =>
      T.of(translated),
    )
    steps = {
      searchBarcode,
      fetchProductPage,
      scrapeProductPage,
      translateProductData,
    }
  })

  it('searches barcode', async () => {
    const main = pipe(
      CPB.createProcessBarcode(steps)(barcode),
      TE.getOrElse(() => T.of({})),
    )
    await main()

    expect(searchBarcode).toHaveBeenCalledWith(barcode)
  })

  it('fetches all product pages', async () => {
    const main = pipe(
      CPB.createProcessBarcode(steps)(barcode),
      TE.getOrElse(() => T.of({})),
    )
    await main()

    expect(fetchProductPage).toHaveBeenCalledTimes(links.length)
  })

  it('translates data', async () => {
    const main = pipe(
      CPB.createProcessBarcode(steps)(barcode),
      TE.getOrElse(() => T.of({})),
    )
    await main()

    expect(translateProductData).toHaveBeenCalledWith({
      name,
      ingredients,
      links,
    })
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

    const main = pipe(
      CPB.createProcessBarcode(steps)(barcode),
      TE.getOrElse(() => T.of({})),
    )
    await main()

    expect(translateProductData).toHaveBeenCalledWith({
      name,
      ingredients,
      links,
      origin,
    })
  })

  it('returns translated product data', async () => {
    const main = pipe(
      CPB.createProcessBarcode(steps)(barcode),
      TE.getOrElse(() => T.of({})),
    )
    const productData = await main()

    expect(productData).toEqual(translated)
  })
})
