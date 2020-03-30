import { pipe, E, axios, TE, PathReporter } from '@symbio/ts-lib'
import * as Core from '@symbio/barcode-processor-core'

export const fetchProductPage: Core.FetchProductPage = link => {
  return pipe(
    TE.tryCatch(
      () => axios.get<Core.Html>(link),
      e => new Core.FetchProductPageRequestFailed(e),
    ),
    TE.chain(resp =>
      pipe(
        Core.Html.decode(resp.data),
        E.mapLeft(e => PathReporter.report(E.left(e))),
        E.mapLeft(e => new Core.ValidationError(e)),
        TE.fromEither,
      ),
    ),
    TE.chain(html => TE.right({ link, html })),
  )
}
