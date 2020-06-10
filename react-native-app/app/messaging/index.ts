import { createMessagingProvider } from './messagingContext'
import { requestPermission } from './requestPermission'
import { observeTokens } from './observeTokens'
import { observeMessages } from './observeMessages'

export * from './types'

export const MessagingProvider = createMessagingProvider({
  requestPermission,
  observeTokens,
  observeMessages,
})
