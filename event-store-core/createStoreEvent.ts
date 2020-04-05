import { removeUndefined, } from '@symbio/ts-lib'
import { DomainEvent } from './DomainEvent'

type Event = DomainEvent & { timestamp: number }
type StoreDomainEvent = (event: DomainEvent) => Promise<void>
export type StoreEvent = (event: Event) => Promise<void>
export type Now = () => number
type Deps = {
  storeEvent: StoreEvent
  now?: Now
}
type CreateStoreEvent = (deps: Deps) => StoreDomainEvent
export const createStoreEvent: CreateStoreEvent = ({
  storeEvent,
  now = Date.now,
}) => (event) => {
  return storeEvent(
    removeUndefined({
      ...event,
      timestamp: now(),
    }),
  )
}
