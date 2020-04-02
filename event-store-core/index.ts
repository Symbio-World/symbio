import { Rr } from '@symbio/ts-lib'

type StoreEvent = (event: { [key:string]: any }) => Promise<void>
type Deps = {
  storeEvent: StoreEvent
}
type CreateStoreEvent = Rr.Reader<Deps, StoreEvent>
export const createStoreEvent: CreateStoreEvent = ({ storeEvent }) => event =>
  storeEvent({
    ...event,
    timestamp: Date.now(),
  })
