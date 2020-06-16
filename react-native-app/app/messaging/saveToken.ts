import { notificationTokenGenerated } from '@symbio/event-store-core'
import { storeEvent } from '../event'
import { fetchLatestToken } from './fetchLatestToken'

type SaveToken = (userId: string, token: string) => Promise<void>
export const saveToken: SaveToken = async (userId, token) => {
  const latestToken = await fetchLatestToken(userId)
  if (latestToken === token) {
    return
  }
  return storeEvent(notificationTokenGenerated({ userId, token }))
}
