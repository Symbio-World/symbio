import { createFailure, isFailureOfType } from './failure'

describe('failure', () => {
  const TEST_FAILURE = 'TEST_FAILURE'
  type TEST_FAILURE = typeof TEST_FAILURE
  const testFailure = createFailure(TEST_FAILURE)

  it('constructs failure with correct name', () => {
    expect(testFailure()).toEqual({
      name: TEST_FAILURE,
    })
  })

  it('constructs failure with message and metadata', () => {
    const message = 'message'
    const metadata = { hello: 'world' }
    expect(testFailure(message, metadata)).toEqual({
      name: TEST_FAILURE,
      message,
      metadata
    })
  })

  it('handles string error', () => {
    const error = 'error'
    expect(testFailure(error)).toEqual({
      name: TEST_FAILURE,
      message: error,
    })
  })

  it('handles error instances', () => {
    const message = 'message'
    const error = new Error(message)
    expect(testFailure(error)).toEqual({
      name: TEST_FAILURE,
      message,
    })
  })

  it('gets catched', () => {
    const message = 'message'
    const error = new Error(message)
    const failure = testFailure(error)
    try {
      throw failure
    } catch (e) {
      expect(e).toEqual(failure)
    }
  })

  describe('isFailure', () => {
    it('returns false for undefined', () => {
      expect(isFailureOfType(undefined, TEST_FAILURE)).toEqual(false)
    })

    it('returns false for string', () => {
      expect(isFailureOfType('error', TEST_FAILURE)).toEqual(false)
    })

    it('returns false for Error', () => {
      expect(isFailureOfType(new Error('error'), TEST_FAILURE)).toEqual(false)
    })

    it('returns false for object without `name` property', () => {
      expect(isFailureOfType({}, TEST_FAILURE)).toEqual(false)
    })

    it('returns false for Failure of different type', () => {
      expect(isFailureOfType(testFailure(), 'SOMETHING_ELSE')).toEqual(false)
    })

    it('returns true for Failure of correct type', () => {
      expect(isFailureOfType(testFailure(), TEST_FAILURE)).toEqual(true)
    })
  })
})
