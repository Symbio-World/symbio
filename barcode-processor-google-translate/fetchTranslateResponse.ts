import { E, TE, pipe, axios } from '@symbio/ts-lib'
import { PathReporter } from 'io-ts/lib/PathReporter'
import * as Core from '@symbio/barcode-processor-core'
import { GoogleTranslateConfig } from './GoogleTranslateConfig'
import { TranslateResponse } from './TranslateResponse'

export type FetchTranslateResponse = (
  strings: string[],
  config: GoogleTranslateConfig,
) => TE.TaskEither<Core.TranslateProductDataError, TranslateResponse>
export const fetchTranslateResponse: FetchTranslateResponse = (
  strings,
  config,
) => {
  return pipe(
    TE.tryCatch(
      () =>
        axios.post(
          config.url,
          {
            q: strings,
            target: config.target,
          },
          {
            params: {
              key: config.key,
            },
          },
        ),
      e => new Core.TranslateRequestFailed(e),
    ),
    TE.chain(
      resp =>
        pipe(
          TranslateResponse.decode(resp.data),
          E.mapLeft(e => PathReporter.report(E.left(e))),
            E.mapLeft(
            e => new Core.ValidationError(e),
          ),
          TE.fromEither,
        ),
    ),
  )
}
