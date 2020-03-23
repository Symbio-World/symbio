import { storeEvent } from '../event'

type SavePrinciples = (userId: string, principles: string[]) => Promise<void>
export const savePrinciples: SavePrinciples = async (userId, principles) =>
  storeEvent({ userId, principles })
