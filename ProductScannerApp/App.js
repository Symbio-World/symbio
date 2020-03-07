/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  BarcodePicker,
  ScanditModule,
  Barcode,
  ScanSettings
} from 'scandit-react-native';
// Set your license key.
ScanditModule.setAppKey('AclefSTFOqv/Dx8+gDAdWhARENDRBdFqFnoHiBd4lm2zBe1c21YpjPdRwDzvWzQdMkzrLSFDkmH7euWa2DB3frAMW9HkYcMwMRde5Nt3rsxUeW4eo1HaoiFjdJdTaQmpoy6ketg0ie7dWxAOBUu8UflKPVyJfNzw4GQoCPZehWJ2XSVwemVZA0dhVTYIboovuHP/KKp/5dq6aHud9ll6WOMOnuK5TG3U1EkTN8hOqhLIc2TbJ09D36R6xMT+Q3st20GV1iZ4o+/JXbWJml6Y0p5SOVtPWiC0DEazqhtcjNCRVNs3yEV1+7JzPE2MT0w5uH26PuFF87c8f0CRX16irY4SmD4DWbilFXcNmixre5r5IBk9JC0Kk+h46Wm/aIS68H3qvcRaGCy4dcV7J1BjkpBq9/fBWBhYMElWzpND4NoxQPS2KFPCTNVSwaUpaSQhnGYKPmZ9vetoNNFFJFbCxZ99I/GwYh2R2Gacw1svQaDrUzaJrC8o/PJkwtBlS2DVFTSlUzhFyIb5Fnjllp6hZQDC5qVq9p+Qpg5S3t8C0ZwQCGGTD677j9LZrrzDNTUT2hcm5cnXsgUgmIHWQ9Rznw0Dbe1w2OHUgdp+VY9EIAp61aP8Yg6QNbhEgOvBRNOr74q74BoEq1CJc/nseXq0kPDEw8Bi1IyeSE/Qv8AFpByV6Kve5lGtLO7cMI5w/qL81VgXkFgZVrXKs1DqCKw9zmzJsGTTTWpoZ+rTqlMBOHFwkRq42ET4y5x56jxjC0X5oU5kJZ0IUFU9x8iO3L4iT8xGjgU7DXCsc72Bti3Ylev1+KO7YV1/1/eNyp/TSVtUov3l/22cuRFJonN3E7w97ax5pLCMdlPeXhs6oJ1p3zEkHRvpMhrSf7978Keh5TYw4qzDWkcju+PNI5Mab8SCyv3HDTMml9JOXbMIeUSnT2p3jnaSdZqs7YprVUlIdfSYaxodWjJhn+3Np/d658GVeJvZO5/rxDwEEVaA5/Z/sWsXAJ16ffGLUaO5NJ2o3yaNt8YqtPNVeF6usTwMPu4lUUSN55SSvrDhu9JsJyjT8vZAlhhGcnlDv2OTqT4eAdDc8Gkf/Ky610tbORE4IurtL8MdhJfcOPT3JtAFzk5wArgJIX69OO1dtzUnWdAwVich/CAcviQikAASD9Z28N15kmFmmi3pEJjBA4rPYUoAH8fi279v/3+6MryqMqM=');
this.settings = new ScanSettings();
this.settings.setSymbologyEnabled(Barcode.Symbology.EAN13, true);
this.settings.setSymbologyEnabled(Barcode.Symbology.EAN8, true);
this.settings.setSymbologyEnabled(Barcode.Symbology.UPCA, true);

export default class SimpleSample extends Component {

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
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column'}}>
        <BarcodePicker
          onScan={(session) => { this.onScan(session) }}
          scanSettings= { this.settings }
          ref={(scan) => { this.scanner = scan }}
          style={{ flex: 1 }}/>
      </View>
    );
  }

  onScan(session) {
    alert(session.newlyRecognizedCodes[0].data + " " + session.newlyRecognizedCodes[0].symbology);
  }

}
