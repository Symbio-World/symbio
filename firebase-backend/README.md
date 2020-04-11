# Run the project
```
yarn serve
```

# Deploy
Add engines to package.json
```
  "engines": {
    "node": "8"
  },
```

Move to node 8 and deploy
```
nvm use 8
yarn deploy
```

# Setting up Dev/Prod
## Google Custom Search
1. Go to https://cse.google.com/cse/all
2. Add new search engine
3. In sites to search add https://www.prismamarket.ee/ -> Create -> Control panel
4. Change name to symbio-prod
5. Delete prisma site from sites to search
6. Toggle "Search the entire web"
7. Go to console.cloud.google.com -> Apis & Services -> Credentials and create a new api key
8. Go to console.cloud.google.com -> Search "Custom Search" -> Enable Cloud Translation API

## Google Translate API
1. Go to console.cloud.google.com -> Search "Translation" -> Enable Cloud Translation API

## Firebase Admin
1. go to Firebase -> Project Settings -> Service Accounts -> Firebase Admin SDK and generate a new private key
2. Add it to .gitignore

## Other
- Add new env.{type}.json file with the credentials from above
- add this file to tsconfig.json and to .gitignore

### New members
To create a service account for a new member, 
