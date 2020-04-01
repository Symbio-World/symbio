import { http } from '@symbio/ts-lib/http'
import { E, TE, pipe, F, flatMapOr } from '@symbio/ts-lib'
import * as Core from '@symbio/barcode-processor-core'
import { GoogleSearchConfig } from './GoogleSearchConfig'
import { SearchResponse } from './SearchResponse'

export type FetchSearchResponse = (
  config: GoogleSearchConfig,
  barcode: Core.Barcode,
) => TE.TaskEither<Core.Failures, SearchResponse>
export const fetchSearchResponse: FetchSearchResponse = (config, barcode) => {
  return pipe(
    TE.tryCatch(
      () =>
        http.get(config.url, {
          params: {
            key: config.key,
            cx: config.cx,
            q: barcode,
          },
        }),
      e => F.fetchFailure(e),
    ),
    flatMapOr(TE.taskEither)(resp =>
      pipe(
        SearchResponse.decode(resp.data),
        E.mapLeft(e => F.decodingFailure(e)),
        TE.fromEither,
      ),
    ),
  )
}
