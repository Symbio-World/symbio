type StoreEvent = (event: { [key:string]: any }) => Promise<void>
type Deps = {
  storeEvent: StoreEvent
}
type CreateStoreEvent = (deps: Deps) => StoreEvent
export const createStoreEvent: CreateStoreEvent = ({ storeEvent }) => event =>
  storeEvent({
    ...event,
    timestamp: Date.now(),
  })
