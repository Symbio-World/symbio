type StoreEvent = (event: { [key:string]: any }) => Promise<void>
type CreateStoreEvent = (deps: Deps) => StoreEvent
type Deps = {
  storeEvent: StoreEvent
}
export const createStoreEvent: CreateStoreEvent = ({ storeEvent }) => event =>
  storeEvent({
    ...event,
    timestamp: Date.now(),
  })
