import * as React from 'react'
import { Observable } from 'rxjs'
import { RemoteMessage, AuthorizationStatus, Action } from './types'
import { useAuth } from '../auth'
import { saveToken } from './saveToken'
import { usePermission } from './usePermission'
import { useToken } from './useToken'
import { useMessage } from './useMessage'
import { navigate } from '../navigation'

type MessagingContext = {
  authorizationStatus?: AuthorizationStatus
  token?: string
  message?: RemoteMessage
}

const messagingContext = React.createContext<MessagingContext>({})

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
  const { user } = useAuth()
  const { authorizationStatus } = usePermission(requestPermission)
  const { token } = useToken(authorizationStatus, observeTokens)
  const { message } = useMessage(authorizationStatus, observeMessages)

  React.useEffect(() => {
    if (user && token) {
      saveToken(user.id, token)
    }
    return
  }, [user, token])

  React.useEffect(() => {
    if (message?.data?.action === Action.TRIGGER_GET_USER_EMAIL_SCREEN) {
      navigate('Modals', {
        screen: 'GetUserEmailScreen',
      })
    }
    return
  }, [message, navigate])

  return (
    <messagingContext.Provider value={{ authorizationStatus, token, message }}>
      {children}
    </messagingContext.Provider>
  )
}

export const useMessaging = (): MessagingContext =>
  React.useContext(messagingContext)
