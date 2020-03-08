import React from 'react';
import {
  AppState,
  Text,
  View,
  Platform,
  PermissionsAndroid,
  BackHandler
} from 'react-native';
import {
  BarcodePicker,
  Barcode,
  ScanSettings,
  ScanOverlay
} from 'scandit-react-native';

export class Home extends React.Component {
  state = {
    barcodes: []
  }

  componentWillMount() {
    this.settings = new ScanSettings();
    this.settings.setSymbologyEnabled(Barcode.Symbology.EAN13, true);
    this.settings.setSymbologyEnabled(Barcode.Symbology.EAN8, true);
    this.settings.setSymbologyEnabled(Barcode.Symbology.UPCA, true);
    this.settings.setSymbologyEnabled(Barcode.Symbology.UPCE, true);
    
    this.settings.matrixScanEnabled = true;
    this.settings.codeRejectionEnabled = true;
    this.settings.highDensityModeEnabled = true;
    this.settings.maxNumberOfCodesPerFrame = 10;
  }

  isAndroidMarshmallowOrNewer() {
    return Platform.OS === 'android' && Platform.Version >= 23;
  }

  async hasCameraPermission() {
    if (this.isAndroidMarshmallowOrNewer()) {
      const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);
      return granted;
    } else {
      return true;
    }
  }

  async requestCameraPermission() {
    if (this.isAndroidMarshmallowOrNewer()) {
      try {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Android Camera Permission has been granted.");
          this.cameraPermissionGranted();
        } else {
          console.log("Android Camera Permission has been denied - the app will shut itself down.");
          this.cameraPermissionDenied();
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      this.cameraPermissionGranted();
    }
  }

  // This method should only be called if the Platform.OS is android.
  cameraPermissionDenied() {
    BackHandler.exitApp();
  }

  cameraPermissionGranted() {
    this.scanner.setGuiStyle(ScanOverlay.GuiStyle.MATRIX_SCAN);
    this.scanner.startScanning();
  }

  async componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    this.checkForCameraPermission();
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }
  
  _handleAppStateChange = async (nextAppState) => {
    if (nextAppState.match(/inactive|background/)) {
      this.scanner.stopScanning();
    } else {
      this.checkForCameraPermission();
    }
  }

  async checkForCameraPermission() {
    const hasPermission = await this.hasCameraPermission();
    if (hasPermission) {
      this.cameraPermissionGranted();
    } else {
      await this.requestCameraPermission();
    }
  }

  render() {
    console.log(this.state.barcodes);
    return (
      <View 
        style={{
          flex: 1,
          flexDirection: 'column'
        }}
      >
        {this.state.barcodes.map(barcode => (
          <View 
            style={{
              position: 'absolute',
              zIndex: 1,
              top: barcode.top,
              left: barcode.left,
              borderRadius: 5,
              backgroundColor: '#00ff00'
            }}
          >
            <Text>
              {barcode.data}
            </Text>                    
          </View>
        ))}
        <BarcodePicker
          onRecognizeNewCodes={(session) => { this.onRecognizeNewCodes(session) }}
          scanSettings= { this.settings }
          ref={(scan) => { this.scanner = scan }}
          style={{ flex: 1, opacity: 1 }}
        />
    </View>
    );
  }

  onRecognizeNewCodes(session) {
    // If you want to visually reject a code you should use ScanSession's rejectCode.
    // For example, the following code will reject all EAN8 codes.
    this.setState({
      barcodes: session.allTrackedCodes.map(barcode => ({
          data: barcode.data,
          left: barcode.convertedLocation.topLeft[0],
          top: barcode.convertedLocation.topLeft[1]
        }))
    })
  }
}
