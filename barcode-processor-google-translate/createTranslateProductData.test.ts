import axios from 'axios'
import * as fixture from '@symbio/barcode-processor-core/ProductData.fixture'
import { createTranslateProductData } from './createTranslateProductData'
import { GoogleTranslateConfig } from './GoogleTranslateConfig'
import { TranslateResponse } from './TranslateResponse'

jest.mock('axios')

describe('createTranslateProductData', () => {
  const config: GoogleTranslateConfig = {
    key: 'key',
    url: 'utl',
    target: 'target',
  }
  const translateResponse: TranslateResponse = {
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
    await createTranslateProductData({ config })(productData)
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
    const productData = await createTranslateProductData({ config })(
      fixture.productData,
    )
    expect(productData).toEqual(fixture.translated)
  })
})
