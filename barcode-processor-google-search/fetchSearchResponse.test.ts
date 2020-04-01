import { E, pipe, F } from '@symbio/ts-lib'
import { http } from '@symbio/ts-lib/http'
import * as Core from '@symbio/barcode-processor-core'
import { fetchSearchResponse } from './fetchSearchResponse'
import { GoogleSearchConfig } from './GoogleSearchConfig'
import * as fixture from './SearchResponse.fixture'

jest.mock('@symbio/ts-lib/http')

describe('fetchSearchResponse', () => {
  const config: GoogleSearchConfig = { cx: '', key: '', url: '' }
  const barcode = '1233432' as Core.Barcode

  it('fails if request fails', async () => {
    ;(http.get as jest.Mock).mockImplementation(() => Promise.reject())

    const e = await fetchSearchResponse(config, barcode)()
    pipe(
      e,
      E.fold(
        failure => {
          expect(failure.name).toEqual(F.FETCH_FAILURE)
        },
        _ => {
          throw new Error()
        },
      ),
    )
  })

  it('fails if does not conform to schema fails', async () => {
    ;(http.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: {} }),
    )

    const e = await fetchSearchResponse(config, barcode)()
    pipe(
      e,
      E.fold(
        failure => {
          expect(failure.name).toEqual(F.DECODING_FAILURE)
        },
        _ => {
          throw new Error()
        },
      ),
    )
  })

  it('fails if items are empty', async () => {
    ;(http.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: { items: [] } }),
    )

    const e = await fetchSearchResponse(config, barcode)()
    pipe(
      e,
      E.fold(
        failure => {
          expect(failure.name).toEqual(F.DECODING_FAILURE)
        },
        _ => {
          throw new Error()
        },
      ),
    )
  })

  it('passes with real world payload', async () => {
    ;(http.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: fixture.searchResponse }),
    )

    const e = await fetchSearchResponse(config, barcode)()
    pipe(
      e,
      E.fold(
        failure => {
          throw(failure)
        },
        searchResponse => {
          expect(searchResponse).toEqual(fixture.searchResponse)
        },
      ),
    )
  })
})
