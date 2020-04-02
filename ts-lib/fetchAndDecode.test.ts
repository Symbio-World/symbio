import { E, pipe, F, t } from './'
import { fetchAndDecode } from './fetchAndDecode'

jest.mock('@symbio/ts-lib/axios')

describe('fetchAndDecode', () => {
  const codec = t.type({ key: t.string })

  it('fails if request fails', async () => {
    const task = () => Promise.reject()

    const e = await fetchAndDecode(codec, task)()

    pipe(
      e,
      E.fold(
        failure => {
          expect(failure.name).toEqual(F.FETCH_FAILURE)
        },
        _ => {
          throw new Error()
        },
      ),
    )
  })

  it('fails if does not conform to schema fails', async () => {
    const task = () => Promise.resolve({ data: {} })

    const e = await fetchAndDecode(codec, task)()

    pipe(
      e,
      E.fold(
        failure => {
          expect(failure.name).toEqual(F.DECODING_FAILURE)
        },
        _ => {
          throw new Error()
        },
      ),
    )
  })

  it('passes with valid payload', async () => {
    const data = { key: '' }
    const task = () => Promise.resolve({ data })

    const e = await fetchAndDecode(codec, task)()

    pipe(
      e,
      E.fold(
        failure => {
          throw(failure)
        },
        result => {
          expect(result).toEqual(data)
        },
      ),
    )
  })
})
