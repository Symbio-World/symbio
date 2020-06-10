import * as React from 'react'
import { Observable, ReplaySubject } from 'rxjs'
import { RemoteMessage, AuthorizationStatus } from './types'
// import { useAuth } from '../auth'
// import { saveToken } from './saveToken'

type MessagingContext = {
  authorizationStatus?: AuthorizationStatus
  token$: Observable<string>
  message$: Observable<RemoteMessage>
}

const token$ = new ReplaySubject<string>(1)
const message$ = new ReplaySubject<RemoteMessage>(1)
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
  // const { user } = useAuth()
  const [authorizationStatus, setAuthorizationStatus] = React.useState<
    AuthorizationStatus
  >()

  React.useEffect(() => {
    requestPermission().then((authStatus) => {
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

  // // @ts-ignore
  // React.useEffect(() => {
  //   if (user) {
  //     const subscription = token$.subscribe((token) =>
  //       saveToken(user.id, token),
  //     )
  //     return () => subscription.unsubscribe()
  //   }
  // }, [user])

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
