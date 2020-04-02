import { axios } from '@symbio/ts-lib/axios'
import { E } from '@symbio/ts-lib'
import * as Core from '@symbio/barcode-processor-core'
import { createSearchBarcode } from './createSearchBarcode'
import { GoogleSearchConfig } from './GoogleSearchConfig'

jest.mock('@symbio/ts-lib/axios')

describe('createSearchResponse', () => {
  const config: GoogleSearchConfig = { cx: '', key: '', url: '' }
  const barcode = '1233432' as Core.Barcode
  const product = { image: 'https://image.com' }
  const link = 'http://link.com'
  const items = [{ link, pagemap: { product: [product] } }]
  const response = { items }

  beforeEach(() => {
    ;(axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: response }),
    )
  })

  it('transforms response into product data', async () => {
    const e = await createSearchBarcode({ config })(barcode)()
    expect(e).toEqual(E.right({
      links: [link],
      ...product,
    }))
  })

  it('calls onSearchResponse', async () => {
    const onSearchResponse = jest.fn()
    await createSearchBarcode({ config, onSearchResponse })(barcode)()
    expect(onSearchResponse).toHaveBeenCalledWith(response)
  })
})
