* Installation

Install yarn
```
brew install yarn
```

Install pod
```
brew install cocoapods
```

Download js dependencies
```
yarn
```

unzip `scandit-barcodescanner-ios_5.14.1.zip`

create a Frameworks folder inside the <directory_of_your_project>/node_modules/scandit-react-native/ios/ScanditBarcodeScanner and move the ScanditBarcodeScanner.framework from the Barcode Scanner for iOS package into the new folder.

Install cocoapods dependencies
```
cd ios && pod install
```

* Run

Instructions are similar for android, just use `android` instead of `ios`

Run on iOS emulator 

```
yarn ios
```
Run on iOS device

```
yarn ios -- --device
```
Run on iOS device in release mode

```
yarn ios -- --device --configuration Release
```

* Test

Run a specific test with
```
yarn test -- -t "<test name>"
```

Run a specific auite with
```
yarn test -- -t "<suite name>"
```