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

## Run on iOS device in release mode
```
yarn ios --device --configuration Release
```

# Test

Run a specific test with
```
yarn test -t "<test name>"
```

Run a specific auite with
```
yarn test -t "<suite name>"
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

## Testing with React Native testing library
https://callstack.github.io/react-native-testing-library/docs/api

## Styling
To speed up writing styles use Tailwind css https://tvke.github.io/react-native-tailwindcss/

## Api calls
Use `axios` instead of default `fetch`
https://github.com/axios/axios

# Deployment

## IOS
- increment version in
1. Open Xcode -> Product -> Build
2. Product -> Archive -> Upload

Initially followed this tutorial
https://readybytes.in/blog/how-to-deploy-a-react-native-ios-app-on-the-app-store

## Android
- increment versions in android/app/build.gradle
- Open Android Studio -> Build -> Generate Signed Bundle/APK -> locate
- Upload to Play Store

Initially followed these tutorials
https://reactnative.dev/docs/signed-apk-android
https://developer.android.com/studio/publish/app-signing#sign_release
