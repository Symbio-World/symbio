import { EventType } from '@symbio/event-store-core'
import { storeEvent } from '../event'

type SaveFeedback = (userId: string, feedback: string) => Promise<void>
export const saveFeedback: SaveFeedback = async (userId, feedback) =>
  storeEvent({ type: EventType.USER_LEFT_FEEDBACK, userId, feedback })
