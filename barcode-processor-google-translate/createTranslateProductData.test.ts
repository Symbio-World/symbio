import { pipe } from 'fp-ts/lib/pipeable'
import * as E from 'fp-ts/lib/Either'
import * as TE from 'fp-ts/lib/TaskEither'
import * as fixture from '@symbio/barcode-processor-core/model.fixture'
import { createTranslateProductData } from './createTranslateProductData'
import { GoogleTranslateConfig } from './GoogleTranslateConfig'
import { fetchTranslateResponse } from './fetchTranslateResponse'
import * as Model from './model'

jest.mock('./fetchTranslateResponse')

describe('createTranslateProductData', () => {
  const config: GoogleTranslateConfig = {
    key: 'key',
    url: 'utl',
    target: 'target',
  }
  const translateResponse: Model.TranslateResponse = {
    data: {
      translations: [
        {
          translatedText: fixture.translatedName,
        },
        {
          translatedText: fixture.translatedIngredients,
        },
      ],
    },
  }

  beforeEach(() => {
    ;(fetchTranslateResponse as jest.Mock).mockImplementation(() =>
      TE.right(translateResponse),
    )
  })

  it('sends request', async () => {
    const e = await createTranslateProductData({ config })(
      fixture.productData,
    )()
    pipe(
      e,
      E.fold(
        _ => {
          throw new Error()
        },
        _ => {
          expect(fetchTranslateResponse).toHaveBeenCalled()
        },
      ),
    )
  })

  it('omits links, image, brand from request', async () => {
    const productData = {
      ...fixture.productData,
      image: '',
      brand: '',
    }
    const e = await createTranslateProductData({ config })(productData)()
    pipe(
      e,
      E.fold(
        _ => {
          throw new Error()
        },
        _ => {
          expect(fetchTranslateResponse).toHaveBeenCalledWith(
            [fixture.name, fixture.ingredients],
            config,
          )
        },
      ),
    )
  })

  it('returns translated product data', async () => {
    const e = await createTranslateProductData({ config })(
      fixture.productData,
    )()
    pipe(
      e,
      E.fold(
        _ => {
          throw new Error()
        },
        productData => {
          expect(productData).toEqual(fixture.translated)
        },
      ),
    )
  })
})
