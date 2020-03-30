import { E, T, TE, pipe, axios } from '@symbio/ts-lib'
import * as Core from '@symbio/barcode-processor-core'
import { PathReporter } from 'io-ts/lib/PathReporter'
import { GoogleSearchConfig } from './GoogleSearchConfig'
import { SearchResponse } from './SearchResponse'

export type FetchSearchResponse = (
  config: GoogleSearchConfig,
  barcode: Core.Barcode,
) => TE.TaskEither<Core.SearchBarcodeError, SearchResponse>
export const fetchSearchResponse: FetchSearchResponse = (config, barcode) => {
  return pipe(
    TE.tryCatch(
      () =>
        axios.get(config.url, {
          params: {
            key: config.key,
            cx: config.cx,
            q: barcode,
          },
        }),
      e => new Core.SearchBarcodeRequestFailed(e),
    ),
    TE.chain(resp =>
      pipe(
        SearchResponse.decode(resp.data),
        E.mapLeft(e => PathReporter.report(E.left(e))),
        E.mapLeft(e => new Core.ValidationError(e.join('\n\n'))),
        TE.fromEither,
      ),
    ),
    TE.chain((response: SearchResponse) =>
      !response.items || response.items.length === 0
        ? TE.leftTask(
            T.of(
              new Core.NoSearchResultsFound(
                `items key is empty in response ${response}`,
              ),
            ),
          )
        : TE.rightTask(T.of(response)),
    ),
  )
}
