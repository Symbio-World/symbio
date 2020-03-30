import { E, pipe, axios } from '@symbio/ts-lib'
import * as Core from '@symbio/barcode-processor-core'
import { fetchSearchResponse } from './fetchSearchResponse'
import { GoogleSearchConfig } from './GoogleSearchConfig'
import * as fixture from './SearchResponse.fixture'

jest.mock('@symbio/ts-lib/axios')

describe('fetchSearchResponse', () => {
  const config: GoogleSearchConfig = { cx: '', key: '', url: '' }
  const barcode = '1233432' as Core.Barcode

  it('fails if request fails', async () => {
    ;(axios.get as jest.Mock).mockImplementation(() => Promise.reject())

    const e = await fetchSearchResponse(config, barcode)()
    pipe(
      e,
      E.fold(
        e => {
          expect(e).toBeInstanceOf(Core.SearchBarcodeRequestFailed)
        },
        _ => {
          throw new Error()
        },
      ),
    )
  })

  it('fails if does not conform to schema fails', async () => {
    ;(axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: {} }),
    )

    const e = await fetchSearchResponse(config, barcode)()
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

  it('product might be empty', async () => {
    ;(axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: fixture }),
    )

    const e = await fetchSearchResponse(config, barcode)()
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

  it('fails if items are empty', async () => {
    ;(axios.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: { items: [] } }),
    )

    const e = await fetchSearchResponse(config, barcode)()
    pipe(
      e,
      E.fold(
        error => {
          expect(error).toBeInstanceOf(Core.NoSearchResultsFound)
        },
        _ => {
          throw new Error()
        },
      ),
    )
  })
})
