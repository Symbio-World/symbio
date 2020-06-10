import * as React from 'react'
import { Observable, BehaviorSubject } from 'rxjs'
import { RemoteMessage, AuthorizationStatus } from './types'

type MessagingContext = {
  authorizationStatus?: AuthorizationStatus
  token$: Observable<string | undefined>
  message$: Observable<RemoteMessage | undefined>
}

const token$ = new BehaviorSubject<string | undefined>(undefined)
const message$ = new BehaviorSubject<RemoteMessage | undefined>(undefined)
const messagingContext = React.createContext<MessagingContext>({
  token$,
  message$,
})

type Props = {
  children: React.ReactNode
}
export type RequestPermission = () => Promise<AuthorizationStatus>
export type ObserveTokens = () => Observable<string>
export type ObserveMessages = () => Observable<RemoteMessage>
export type Deps = {
  requestPermission: RequestPermission
  observeTokens: ObserveTokens
  observeMessages: ObserveMessages
}
type CreateMessagingProvider = (deps: Deps) => React.FC<Props>
export const createMessagingProvider: CreateMessagingProvider = ({
  requestPermission,
  observeTokens,
  observeMessages,
}) => ({ children }: Props) => {
  const [authorizationStatus, setAuthorizationStatus] = React.useState<
    AuthorizationStatus
  >()

  React.useEffect(() => {
    requestPermission().then((authStatus) => {
      console.log('Authorization status: ', authStatus)
      setAuthorizationStatus(authStatus)
    })
  }, [])

  // @ts-ignore
  React.useEffect(() => {
    if (authorizationStatus) {
      const observeTokensSubscription = observeTokens().subscribe(token$)
      const observeMessagesSubscription = observeMessages().subscribe(message$)
      return () => {
        observeTokensSubscription.unsubscribe()
        observeMessagesSubscription.unsubscribe()
      }
    }
  }, [authorizationStatus])

  return (
    <messagingContext.Provider
      value={{ authorizationStatus, token$, message$ }}
    >
      {children}
    </messagingContext.Provider>
  )
}

export const useMessaging = (): MessagingContext =>
  React.useContext(messagingContext)
