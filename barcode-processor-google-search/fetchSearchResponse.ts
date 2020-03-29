import axios, { AxiosResponse } from 'axios'
import { pipe } from 'fp-ts/lib/pipeable'
import * as TE from 'fp-ts/lib/TaskEither'
import * as T from 'fp-ts/lib/Task'
import * as E from 'fp-ts/lib/Either'
import * as Core from '@symbio/barcode-processor-core'
import { GoogleSearchConfig } from './GoogleSearchConfig'
import { SearchResponse } from './model'

export type FetchSearchResponse = (
  config: GoogleSearchConfig,
  barcode: Core.Barcode,
) => TE.TaskEither<Core.SearchBarcodeError, SearchResponse>
export const fetchSearchResponse: FetchSearchResponse = (config, barcode) => {
  return pipe(
    TE.tryCatch<Core.SearchBarcodeError, AxiosResponse>(
      () =>
        axios.get(config.url, {
          params: {
            key: config.key,
            cx: config.cx,
            q: barcode,
          },
        }),
      _ => Core.SearchBarcodeRequestFailed,
    ),
    TE.chain<Core.SearchBarcodeError, AxiosResponse, SearchResponse>(resp =>
      pipe(
        SearchResponse.decode(resp.data),
        E.mapLeft(_ => Core.ValidationError as Core.SearchBarcodeError),
        TE.fromEither,
      ),
    ),
    TE.chain((response: SearchResponse) =>
      !response.items || response.items.length === 0
        ? TE.leftTask(T.of(Core.NoSearchResultsFound))
        : TE.rightTask(T.of(response)),
    ),
  )
}
