import axios from 'axios'
import { createTranslateProductData } from './createTranslateProductData'
import { GoogleTranslateConfig } from './GoogleTranslateConfig'
import * as simple from './createTranslateProductData.fixture'
import * as emptyAllergens from './createTranslateProductData.emptyAllergens.fixture'

jest.mock('axios')

describe('createTranslateProductData', () => {
  const config: GoogleTranslateConfig = {
    key: 'key',
    url: 'utl',
    target: 'target',
  }

  beforeEach(() => {
    ;(axios.post as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: simple.translateResponse }),
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('omits links, image, brand from request', async () => {
    const productData = {
      ...simple.productData,
      image: '',
      brand: '',
    }
    await createTranslateProductData({ config })(productData)
    expect(axios.post).toHaveBeenCalledWith(
      config.url,
      {
        q: [simple.productData.name, simple.productData.ingredients],
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
      simple.productData,
    )
    expect(productData).toEqual(simple.translatedProductData)
  })

  it('does not send a request if product data is empty', async () => {
    const productData = { links: [] }
    const translated = await createTranslateProductData({ config })(productData)
    expect(axios.post).toHaveBeenCalledTimes(0)
    expect(translated).toEqual(productData)
  })

  it('does not send a request if product contains only untranslated keys', async () => {
    const productData = {
      links: ['http://link1.com'],
      image: '',
      brand: '',
    }
    const translated = await createTranslateProductData({ config })(productData)
    expect(axios.post).toHaveBeenCalledTimes(0)
    expect(translated).toEqual(productData)
  })

  it('handles empty allergens', async () => {
    ;(axios.post as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: emptyAllergens.translateResponse }),
    )
    const translated = await createTranslateProductData({ config })(
      emptyAllergens.productData,
    )
    expect(translated).toEqual({
      image:
        'https://s3-eu-west-1.amazonaws.com/balticsimages/images/180x220/e22528194101337ecff1b3e4c5f7c792.png',
      name: 'Tatars 1 kg',
      description: 'Tatars 1 kg',
      sku: '4750020030919',
      category: 'Solids / Flakes and groats / Groats',
      brand: 'TARTU MILL',
      links: [
        'https://www.prismamarket.ee/entry/tatar-1-kg/4750020030919',
        'https://tartumill.ee/et/tooted/kuivained/',
        'https://www.selver.ee/tatar-tartu-mill-1-kg',
        'https://tartumill.ee/en/tooted/kuivained/',
        'https://www.selver.ee/ru/tatar-tartu-mill-1-kg',
        'https://issuu.com/aldar/docs/aldar_cc_kliendileht_oktoober-novem',
      ],
      ingredients: '',
      allergens: [],
      origin: 'European Union',
    })
  })
})
