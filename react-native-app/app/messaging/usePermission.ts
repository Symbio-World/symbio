import * as React from 'react'
import { RequestPermission } from './messagingContext'
import { AuthorizationStatus } from './types'

export const usePermission = (requestPermission: RequestPermission) => {
  const [authorizationStatus, setAuthorizationStatus] = React.useState<
    AuthorizationStatus
  >()

  React.useEffect(() => {
    requestPermission().then((authStatus) => {
      setAuthorizationStatus(authStatus)
    })
  }, [requestPermission])

  return { authorizationStatus }
}
