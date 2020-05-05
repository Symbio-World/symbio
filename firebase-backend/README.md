# Firebase functions

# Firebase Hosting

# Firestore rules and indexes

# BigQuery Extension
1 Extension per 1 Collection

To link BigQuery table to Firestore collection
1. https://firebase.google.com/products/extensions/firestore-bigquery-export -> Install in console -> Choose project and configure collection (leave everything as default except collection path and table id)
2. In Gcloud Shell type `npx @firebaseextensions/fs-bq-import-collection` to import the data
