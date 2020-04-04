import { EventType } from './EventType'

export type Event = {
  type: EventType
  [key: string]: unknown
}
type StoreEvent = (event: Event) => Promise<void>
type Now = () => number
type Deps = {
  storeEvent: StoreEvent
  now?: Now
}
type CreateStoreEvent = (deps: Deps) => StoreEvent
export const createStoreEvent: CreateStoreEvent = ({
  storeEvent,
  now = Date.now,
}) => event => {
  return storeEvent({
    ...event,
    timestamp: now(),
  })
}
