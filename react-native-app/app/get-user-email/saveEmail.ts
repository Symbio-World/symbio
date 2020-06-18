import { userSubmittedEmail } from '@symbio/event-store-core'
import { storeEvent } from '../event'

type SaveEmail = (userId: string, email: string) => Promise<void>
export const saveEmail: SaveEmail = async (userId, email) =>
  storeEvent(userSubmittedEmail(userId, email))
