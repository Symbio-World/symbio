import { F, t, pipe, E } from './'

describe('failure', () => {
  const TEST_FAILURE = 'TEST_FAILURE'
  type TEST_FAILURE = typeof TEST_FAILURE
  const testFailure = F.createFailure(TEST_FAILURE)

  it('constructs failure with correct name', () => {
    expect(testFailure()).toEqual({
      name: TEST_FAILURE,
    })
  })

  /* eslint-disable @typescript-eslint/naming-convention */
  it('handles string error', () => {
    const error = 'error'
    expect(testFailure(error)).toEqual({
      name: TEST_FAILURE,
      message: error,
      error,
    })
  })

  it('handles error instances', () => {
    const message = 'message'
    const error = new Error(message)
    expect(testFailure(error)).toEqual({
      name: TEST_FAILURE,
      message,
      error,
    })
  })

  it('handles decoder error', () => {
    const e = t.type({ key: t.string }).decode({})

    pipe(
      e,
      E.fold(
        errors => {
          expect(testFailure(errors)).toEqual({
            name: TEST_FAILURE,
            message:
              'Invalid value undefined supplied to : { key: string }/key: string',
            error: errors,
          })
        },
        () => {
          throw new Error()
        },
      ),
    )
  })
})
