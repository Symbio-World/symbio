import { createStoreEvent } from './createStoreEvent'
import { EventType } from './EventType'

describe('createStoreEvent', () => {
  it('adds timestamp to event', async () => {
    const storeEvent = jest.fn(() => Promise.resolve())
    const now = jest.fn(() => 1585933810891)
    const event = { type: EventType.BARCODE_GOT_PROCESSED }
    await createStoreEvent({ storeEvent, now })(event)
    expect(storeEvent).toHaveBeenCalledWith({
      ...event,
      timestamp: 1585933810891,
    })
  })
})
