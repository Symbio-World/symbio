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

# Deployment

For both platforms run the following command first `yarn set-env-prod`

## IOS
1. increment versions in Xcode
2. Open Xcode -> Product -> Schemes -> Edit and choose Release -> close
3. Product -> Build
4. Product -> Archive -> Upload
5. Open Xcode -> Product -> Schemes -> Edit and choose Debug -> close

Initially followed this tutorial
https://readybytes.in/blog/how-to-deploy-a-react-native-ios-app-on-the-app-store

## Android
- increment versions in android/app/build.gradle
- Open Android Studio -> Build -> Generate Signed Bundle/APK -> locate
- Upload to Play Store

Initially followed these tutorials
https://reactnative.dev/docs/signed-apk-android
https://developer.android.com/studio/publish/app-signing#sign_release

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
