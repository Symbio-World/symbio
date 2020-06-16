import * as React from 'react'
import { ObserveMessages } from './messagingContext'
import { AuthorizationStatus, RemoteMessage } from './types'

export const useMessage = (
  authorizationStatus: AuthorizationStatus | undefined,
  observeMessages: ObserveMessages,
) => {
  const [message, setMessage] = React.useState<RemoteMessage>()
  React.useEffect(() => {
    if (authorizationStatus) {
      const observeMessagesSubscription = observeMessages().subscribe(
        setMessage,
      )
      return observeMessagesSubscription.unsubscribe
    }
    return
  }, [authorizationStatus, observeMessages])

  return { message }
}
