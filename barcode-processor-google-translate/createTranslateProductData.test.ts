import { axios } from '@symbio/ts-lib/axios'
import { E } from '@symbio/ts-lib'
import * as fixture from '@symbio/barcode-processor-core/ProductData.fixture'
import { createTranslateProductData } from './createTranslateProductData'
import { GoogleTranslateConfig } from './GoogleTranslateConfig'
import * as Model from './TranslateResponse'

jest.mock('@symbio/ts-lib/axios')

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
    ;(axios.post as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: translateResponse }),
    )
  })

  it('omits links, image, brand from request', async () => {
    const productData = {
      ...fixture.productData,
      image: '',
      brand: '',
    }
    await createTranslateProductData({ config })(productData)()
    expect(axios.post).toHaveBeenCalledWith(
      config.url,
      {
        q: [fixture.name, fixture.ingredients],
        target: config.target,
      },
      {
        params: {
          key: config.key,
        },
      },
    )
  })

  it('returns translated product data', async () => {
    const e = await createTranslateProductData({ config })(
      fixture.productData,
    )()
    expect(e).toEqual(E.right(fixture.translated))
  })
})
