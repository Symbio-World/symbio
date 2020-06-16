import * as React from 'react'
import { ObserveTokens } from './messagingContext'
import { AuthorizationStatus } from './types'

export const useToken = (
  authorizationStatus: AuthorizationStatus | undefined,
  observeTokens: ObserveTokens,
) => {
  const [token, setToken] = React.useState<string>()
  React.useEffect(() => {
    if (authorizationStatus) {
      const observeTokensSubscription = observeTokens().subscribe(setToken)
      return observeTokensSubscription.unsubscribe
    }
    return
  }, [authorizationStatus, observeTokens])

  return { token }
}
