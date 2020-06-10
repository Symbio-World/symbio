import messaging from '@react-native-firebase/messaging'
import { requestPermission } from './requestPermission'
import { AuthorizationStatus } from './types'

jest.mock('@react-native-firebase/messaging')

describe('requestPermission', () => {
  let messagingRequestPermission = jest.fn(() =>
    Promise.resolve(AuthorizationStatus.AUTHORIZED),
  )

  beforeEach(() => {
    ;((messaging as unknown) as jest.Mock).mockImplementation(() => ({
      requestPermission: messagingRequestPermission,
    }))
  })

  it('proxies messaging request permission', async () => {
    const authStatus = await requestPermission()
    expect(messagingRequestPermission).toHaveBeenCalled()
    expect(authStatus).toEqual(AuthorizationStatus.AUTHORIZED)
  })
})
