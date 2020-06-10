import { notificationTokenGenerated } from '@symbio/event-store-core'
import { storeEvent } from '../event'

type SaveToken = (userId: string, token: string) => Promise<void>
export const saveToken: SaveToken = async (userId, token) =>
  storeEvent(notificationTokenGenerated({ userId, token }))
