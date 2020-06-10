import messaging from '@react-native-firebase/messaging'
import { take } from 'rxjs/operators'
import { observeTokens } from './observeTokens'

jest.mock('@react-native-firebase/messaging')

describe('observeTokens', () => {
  let initialToken = 'initialToken'
  let getToken = jest.fn(() => Promise.resolve(initialToken))
  let refreshedToken = 'refreshedToken'
  let onTokenRefresh = jest.fn((handler) => handler(refreshedToken))

  beforeEach(() => {
    ;((messaging as unknown) as jest.Mock).mockImplementation(() => ({
      getToken,
      onTokenRefresh,
    }))
  })

  it('gets the token', (done) => {
    const token$ = observeTokens()
    token$.pipe(take(0)).subscribe({
      next: (t) => {
        expect(t).toEqual(initialToken)
      },
      complete: () => done(),
    })
  })

  it('handles token refresh', (done) => {
    const token$ = observeTokens()
    token$.pipe(take(1)).subscribe({
      next: (t) => {
        expect(t).toEqual(refreshedToken)
      },
      complete: () => done(),
    })
  })
})
