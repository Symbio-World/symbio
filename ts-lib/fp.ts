export { pipe } from 'fp-ts/lib/pipeable'
export { flow } from 'fp-ts/lib/function'

import * as A from 'fp-ts/lib/Array'
import * as E from 'fp-ts/lib/Either'
import * as T from 'fp-ts/lib/Task'
import * as TE from 'fp-ts/lib/TaskEither'
import * as Rr from 'fp-ts/lib/Reader'
import * as RE from 'fp-ts/lib/ReaderEither'
import * as RT from 'fp-ts/lib/ReaderTask'
import * as RTE from 'fp-ts/lib/ReaderTaskEither'

export { A, E, T, TE, Rr, RE, RT, RTE }

/* eslint-disable */
// https://github.com/gcanti/fp-ts/issues/904#issuecomment-523848372
import { Kind2, URIS2 } from 'fp-ts/lib/HKT'
import { Chain2 } from 'fp-ts/lib/Chain';

export function flatMapOr<U extends URIS2>(
	M: Chain2<U>,
): <E2, A, B>(f: (a: A) => Kind2<U, E2, B>) => <E1>(ma: Kind2<U, E1, A>) => Kind2<U, E1 | E2, B> {
	return f => ma => M.chain(ma, f as any) as any;
}

export function flatMapAnd<U extends URIS2>(
	M: Chain2<U>,
): <E2, A, B>(f: (a: A) => Kind2<U, E2, B>) => <E1>(ma: Kind2<U, E1, A>) => Kind2<U, E1 & E2, B> {
	return f => ma => M.chain(ma, f as any) as any;
}
