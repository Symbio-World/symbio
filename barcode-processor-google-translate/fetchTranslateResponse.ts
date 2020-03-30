import axios from 'axios'
import { pipe } from 'fp-ts/lib/pipeable'
import * as TE from 'fp-ts/lib/TaskEither'
import * as E from 'fp-ts/lib/Either'
import * as Core from '@symbio/barcode-processor-core'
import { GoogleTranslateConfig } from './GoogleTranslateConfig'
import { TranslateResponse } from './model'

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
      _ => new Core.TranslateRequestFailed(),
    ),
    TE.chain(
      resp =>
        pipe(
          TranslateResponse.decode(resp.data),
          E.mapLeft(
            _ => new Core.ValidationError(),
          ),
          TE.fromEither,
        ),
    ),
  )
}
