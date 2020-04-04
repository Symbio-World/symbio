import { EventType } from '@symbio/event-store-core'
import { storeEvent } from '../event'

type SavePrinciples = (userId: string, principles: string[]) => Promise<void>
export const savePrinciples: SavePrinciples = async (userId, principles) =>
  storeEvent({
    type: EventType.USER_SELECTED_PRINCIPLES,
    userId,
    principles,
  })
