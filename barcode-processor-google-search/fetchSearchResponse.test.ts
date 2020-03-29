import { pipe } from 'fp-ts/lib/pipeable'
// import * as TE from 'fp-ts/lib/TaskEither'
import * as E from 'fp-ts/lib/Either'
// import * as T from 'fp-ts/lib/Task'
// import * as t from 'io-ts'
// import { PathReporter } from 'io-ts/lib/PathReporter'
import * as Core from '@symbio/barcode-processor-core'
import { fetchSearchResponse } from './fetchSearchResponse'
import { GoogleSearchConfig } from './GoogleSearchConfig'

import axios from 'axios'

jest.mock('axios')

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
          expect(e).toBe(Core.SearchBarcodeRequestFailed)
        },
        _ => {
          throw new Error('Should not succeed')
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
          expect(error).toEqual(Core.ValidationError)
        },
        a => {
          throw new Error(
            `Should not succeed, but received ${JSON.stringify(a, null, 4)}`,
          )
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
          expect(error).toBe(Core.NoSearchResultsFound)
        },
        a => {
          throw new Error(
            `Should not succeed, but received ${JSON.stringify(a, null, 4)}`,
          )
        },
      ),
    )
  })
})
