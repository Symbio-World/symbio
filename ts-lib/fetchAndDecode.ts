import { pipe, TE, T, F, flatMapOr, t, E } from './'

export type FetchAndDecode = <A, O>(
  codec: t.Type<A, O>,
  task: T.Task<{ data: unknown }>,
) => TE.TaskEither<F.FetchFailure | F.DecodingFailure, A>
export const fetchAndDecode: FetchAndDecode = (codec, task) => {
  return pipe(
    TE.tryCatch(task, e => F.fetchFailure(e)),
    flatMapOr(TE.taskEither)(resp =>
      pipe(
        codec.decode(resp.data),
        E.mapLeft(e => F.decodingFailure(e)),
        TE.fromEither,
      ),
    ),
  )
}
