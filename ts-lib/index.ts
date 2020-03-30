export { pipe } from 'fp-ts/lib/pipeable'
export * from './error'
export { axios } from './axios'
export { PathReporter } from 'io-ts/lib/PathReporter'

import * as A from 'fp-ts/lib/Array'
import * as E from 'fp-ts/lib/Either'
import * as T from 'fp-ts/lib/Task'
import * as TE from 'fp-ts/lib/TaskEither'
import * as R from 'ramda'
import * as t from 'io-ts'

export { A, E, T, TE, R, t }
