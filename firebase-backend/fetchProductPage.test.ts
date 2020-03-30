import { pipe, E } from '@symbio/ts-lib'
import * as Core from '@symbio/barcode-processor-core'
import { fetchProductPage } from './fetchProductPage'

import axios from 'axios'

jest.mock('axios')

describe('fetchProductPage', () => {
  const link = 'http://link.com' as Core.Link

  it('fails if request fails', async () => {
    ;(axios.get as jest.Mock).mockImplementation(() => Promise.reject())

    const e = await fetchProductPage(link)()
    pipe(
      e,
      E.fold(
        e => {
          expect(e).toBeInstanceOf(Core.FetchProductPageRequestFailed)
        },
        _ => {
          throw new Error()
        },
      ),
    )
  })

  it('fails if does not conform to schema fails', async () => {
    ;(axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: '' }),
    )

    const e = await fetchProductPage(link)()
    pipe(
      e,
      E.fold(
        error => {
          expect(error).toBeInstanceOf(Core.ValidationError)
        },
        _ => {
          throw new Error()
        },
      ),
    )
  })
})
