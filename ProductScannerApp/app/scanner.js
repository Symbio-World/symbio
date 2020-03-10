import React, { Component } from 'react';
import {
  AppState,
  View,
  Platform,
  PermissionsAndroid,
  BackHandler
} from 'react-native';
import {
  BarcodePicker,
  Barcode,
  ScanSettings
} from 'scandit-react-native';
import { t } from 'react-native-tailwindcss';

import { Overlay } from './overlay';
import { ProductCardContainer } from './product-card-container'

export class Scanner extends Component {
  state = {
    barcode: null
  }

  componentWillMount() {
    this.settings = new ScanSettings();
    this.settings.setSymbologyEnabled(Barcode.Symbology.EAN13, true);
    this.settings.setSymbologyEnabled(Barcode.Symbology.EAN8, true);
    this.settings.setSymbologyEnabled(Barcode.Symbology.UPCA, true);
    this.settings.setSymbologyEnabled(Barcode.Symbology.UPCE, true);
    this.settings.setSymbologyEnabled(Barcode.Symbology.CODE39, true);
    this.settings.setSymbologyEnabled(Barcode.Symbology.ITF, true);
    this.settings.setSymbologyEnabled(Barcode.Symbology.QR, true);
    this.settings.setSymbologyEnabled(Barcode.Symbology.DATA_MATRIX, true);
    this.settings.setSymbologyEnabled(Barcode.Symbology.CODE128, true);

    /* Some 1d barcode symbologies allow you to encode variable-length data. By default, the
       Scandit BarcodeScanner SDK only scans barcodes in a certain length range. If your
       application requires scanning of one of these symbologies, and the length is falling
       outside the default range, you may need to adjust the "active symbol counts" for this
       symbology. This is shown in the following few lines of code. */
    this.settings.getSymbologySettings(Barcode.Symbology.CODE39)
      .activeSymbolCounts = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    /* For details on defaults and how to calculate the symbol counts for each symbology, take
       a look at http://docs.scandit.com/stable/c_api/symbologies.html. */
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
          this.startScanning();
        } else {
          console.log("Android Camera Permission has been denied - the app will shut itself down.");
          this.cameraPermissionDenied();
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      this.startScanning();
    }
  }

  // This method should only be called if the Platform.OS is android.
  cameraPermissionDenied() {
    BackHandler.exitApp();
  }

  startScanning() {
    this.scanner.startScanning();
  }

  stopScanning() {
    this.scanner.stopScanning();
  }

  async componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    this.checkForCameraPermission();
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = async nextAppState => {
    if (nextAppState.match(/inactive|background/)) {
      this.scanner.stopScanning();
    } else {
      this.checkForCameraPermission();
    }
  }

  async checkForCameraPermission() {
    const hasPermission = await this.hasCameraPermission();
    if (hasPermission) {
      this.startScanning();
    } else {
      await this.requestCameraPermission();
    }
  }

  render() {
    return (
      <View style={[t.flex1, t.z0]}>
        {this.state.barcode && (
          <Overlay
            onDismiss={() => this.onDismiss()}
          >
            <ProductCardContainer barcode={this.state.barcode} />
          </Overlay>
        )}
        <BarcodePicker
          onScan={session => { this.onScan(session) }}
          scanSettings= { this.settings }
          ref={scan => { this.scanner = scan }}
          style={{ flex: 1 }}
        />
      </View>
    );
  }

  onDismiss() {
    this.setState({ barcode: null })
    this.startScanning()
  }

  onScan(session) {
    const barcode = session.newlyRecognizedCodes[0].data
    this.setState({ barcode }, () => {
      this.stopScanning()
    })
  }
}
