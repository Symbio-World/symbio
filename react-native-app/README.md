# Setup

1. Ask for `env.dev.ts` and put it near README
2. Ask for `scandit-barcodescanner-ios_5.14.2.zip` and put it near README

# Installation

## Install pod
```
brew install cocoapods
```

## Install packages if you have not yet run yarn in workspace root
```
yarn
```

## Setup scandit
```
yarn setup-scandit
```

## Install cocoapods dependencies
```
yarn install-pods
```

# Run

Instructions are similar for android, just use `android` instead of `ios`

## Run on iOS emulator 
```
yarn ios
```

## Run on iOS device
```
yarn ios --device
```

## Run on iOS device in production mode
```
yarn ios-prod --device
```

## Run on Android device in production mode
```
yarn android-prod
```

# Test

Run a specific suite with
```
yarn test -t "<suite name>"
```

Run a specific test with
```
yarn test -t "<suite name> <test name>"
```

Update snapshot tests
```
yarn test -u
```

# Worflow

## Firebase
https://invertase.io/oss/react-native-firebase/
Firebase provides 
- error reporting
- authentication
- analytics
- database

## Navigation
https://reactnavigation.org/docs/params/

## Testing with React Native testing library
https://callstack.github.io/react-native-testing-library/docs/api

## Styling
To speed up writing styles use Tailwind css https://tvke.github.io/react-native-tailwindcss/

## Api calls
Use `axios` instead of default `fetch`
https://github.com/axios/axios

# Releasing app to stores

```
yarn build # build or watch code in root directory before starting release process
cd react-native-app

yarn set-env-prod
yarn increment-version
fastlane ios internal
fastlane android internal
```

Using git tag
```
git tag internal... # tag needs to start with internal
git push origin internal...
```

# Setting up Dev/Prod
Follow this guide
1. https://medium.com/@gregoire.frileux/how-to-manage-multiple-environments-dev-staging-prod-for-firebase-with-react-native-app-205c7c1a5e35
2. In Firebase -> Authentication enable Anonymous Sign-in method
3. In Firebase -> Database create Database in production mode and in EU region
4. In Databse -> Rules ammend the rules to the following and publish
```
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth.uid != null;
    }
  }
}
```
5. Create indexes
