import { E, pipe, axios } from '@symbio/ts-lib'
import * as Core from '@symbio/barcode-processor-core'
import { fetchTranslateResponse } from './fetchTranslateResponse'
import { GoogleTranslateConfig } from './GoogleTranslateConfig'

jest.mock('@symbio/ts-lib/axios')

describe('fetchTranslateResponse', () => {
  const config: GoogleTranslateConfig = { key: '', url: '', target: '' }
  const strings = ['Hallo Welt', 'Mein Name ist Jeff', '']

  it('fails if request fails', async () => {
    ;(axios.post as jest.Mock).mockImplementation(() => Promise.reject())

    const e = await fetchTranslateResponse(strings, config)()
    pipe(
      e,
      E.fold(
        e => {
          expect(e).toBeInstanceOf(Core.TranslateRequestFailed)
        },
        _ => {
          throw new Error()
        },
      ),
    )
  })

  it('fails if does not conform to schema fails', async () => {
    ;(axios.post as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: {} }),
    )

    const e = await fetchTranslateResponse(strings, config)()
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
