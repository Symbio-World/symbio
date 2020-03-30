import { TE, pipe, E } from '@symbio/ts-lib'
import * as Core from '@symbio/barcode-processor-core'
import { createSearchBarcode } from './createSearchBarcode'
import { fetchSearchResponse } from './fetchSearchResponse'
import { GoogleSearchConfig } from './GoogleSearchConfig'

jest.mock('./fetchSearchResponse')

describe('createSearchResponse', () => {
  const config: GoogleSearchConfig = { cx: '', key: '', url: '' }
  const barcode = '1233432' as Core.Barcode
  const product = {image: 'https://image.com'}
  const link = 'link'
  const items = [{ link, pagemap: { product: [product] } }]
  const response = { items }

  it('transforms response into product data', async () => {
    ;(fetchSearchResponse as jest.Mock).mockImplementation(() =>
      TE.taskEither.of(response),
    )

    const e = await createSearchBarcode({ config })(barcode)()

    pipe(
      e,
      E.fold(
        _ => {
          throw new Error()
        },
        productData => {
          expect(productData).toEqual({
           links: [link],
            ...product
          })
        },
      ),
    )
  })

  it('calls onSearchResponse', async () => {
    ;(fetchSearchResponse as jest.Mock).mockImplementation(() =>
      TE.taskEither.of(response),
    )
    const onSearchResponse = jest.fn()

    const e = await createSearchBarcode({ config, onSearchResponse })(barcode)()

    pipe(
      e,
      E.fold(
        _ => {
          throw new Error()
        },
        _ => {
          expect(onSearchResponse).toHaveBeenCalledWith(response)
        },
      ),
    )
  })
})
