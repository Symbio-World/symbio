Events are plain JSON objects that have 
- `timestamp` - when it happened
- `type` - Redux like action type

Some conventions that started appearing:
- `triggerId` refers to a triggering event's id

what i want from event-store
- put events in
- query, i.e. aggregate across collections and docs
- listen for updates, aggregate across collections and docs

3 approaches to storing event store in firebase: 
- store all events in 1 collection
cons: cannot listen to a particular type of event

- store each type as separate collection

- store all events under events collection and type under subcollection
- 



