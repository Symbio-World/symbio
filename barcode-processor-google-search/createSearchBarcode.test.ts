import axios from 'axios'
import * as Core from '@symbio/barcode-processor-core'
import { createSearchBarcode } from './createSearchBarcode'
import { GoogleSearchConfig } from './GoogleSearchConfig'
import * as noProductFixture from './SearchResponse.noProduct.fixture'
import * as noItemsFixture from './SearchResponse.noItems.fixture'

jest.mock('axios')

describe('createSearchResponse', () => {
  const config: GoogleSearchConfig = { cx: '', key: '', url: '' }
  const barcode = '1233432'
  const product = { image: 'https://image.com' }
  const link = 'http://link.com'
  const response = { items: [{ link, pagemap: { product: [product] } }] }

  beforeEach(() => {
    ;(axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: response }),
    )
  })

  it('transforms response into product data', async () => {
    const productSearchData = await createSearchBarcode({ config })(barcode)
    expect(productSearchData).toEqual({
      links: [link],
      ...product,
    })
  })

  it('calls onSearchResponse', async () => {
    const onSearchResponse = jest.fn()
    await createSearchBarcode({ config, onSearchResponse })(barcode)
    expect(onSearchResponse).toHaveBeenCalledWith(response)
  })

  it('transforms response with no product into product data', async () => {
    ;(axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: noProductFixture.searchResponse }),
    )

    const productSearchData = await createSearchBarcode({ config })(barcode)
    expect(productSearchData).toEqual({
      image:
        'https://s3-eu-west-1.amazonaws.com/balticsimages/images/180x220/e22528194101337ecff1b3e4c5f7c792.png',
      name: 'Tatar 1 kg',
      description: 'Tatar 1 kg',
      sku: '4750020030919',
      category: 'Kuivained / Helbed ja tangud / Tangud',
      brand: 'TARTU MILL',
      links: [
        'https://www.prismamarket.ee/entry/tatar-1-kg/4750020030919',
        'https://tartumill.ee/et/tooted/kuivained/',
        'https://www.selver.ee/tatar-tartu-mill-1-kg',
        'https://tartumill.ee/en/tooted/kuivained/',
        'https://www.selver.ee/ru/tatar-tartu-mill-1-kg',
        'https://issuu.com/aldar/docs/aldar_cc_kliendileht_oktoober-novem',
        'https://kojukanne.sty.ee/page/5/',
      ],
    })
  })

  it('errors if search response has no items', async () => {
    ;(axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: noItemsFixture.searchResponse }),
    )
    await expect(createSearchBarcode({ config })(barcode)).rejects.toEqual(
      Core.noSearchResultsFound(barcode),
    )
  })
})
