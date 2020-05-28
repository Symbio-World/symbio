const { EventType } = require('@symbio/event-store-core')

module.exports.migrate = async ({ firestore }) => {
  let snapshot = await firestore
    .collection(EventType.BARCODE_PROCESSED)
    .get()

  snapshot.forEach((doc) => {
    const data = doc.data()
    console.log(data)
  })
}
