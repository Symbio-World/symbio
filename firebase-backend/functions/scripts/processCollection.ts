import { QuerySnapshot } from '@google-cloud/firestore'
import { admin } from '../admin'

type CreateBatchQuery = (
  collectionName: string,
  batchSize: number,
) => (lastTimestamp?: number) => Promise<QuerySnapshot>
const createBatchQuery: CreateBatchQuery = (collectionName, batchSize) => (
  lastTimestamp = 0,
) =>
  admin
    .firestore()
    .collection(collectionName)
    .orderBy('timestamp')
    .startAfter(lastTimestamp)
    .limit(batchSize)
    .get()

type ProcessCollection = (
  collectionName: string,
  processingFunction: (data: any) => Promise<void>,
) => void
export const processCollection: ProcessCollection = async (
  collectionName,
  processingFunction,
) => {
  const batchQuery = createBatchQuery(collectionName, 10)
  let snapshot = await batchQuery()
  while (snapshot.docs.length > 0) {
    snapshot.forEach((doc) => {
      const data = doc.data()
      processingFunction(data)
    })
    let last = snapshot.docs[snapshot.docs.length - 1]
    snapshot = await batchQuery(last.data().timestamp)
  }
}
