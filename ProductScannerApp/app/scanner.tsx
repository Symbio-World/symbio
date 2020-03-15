import React, { useRef, useState, useEffect } from 'react'
import {
  AppState,
  View,
  Platform,
  PermissionsAndroid,
  BackHandler,
  Text,
} from 'react-native'
import { BarcodePicker, Barcode, ScanSettings } from 'scandit-react-native'
import { t } from 'react-native-tailwindcss'

import { Modal } from './ui-kit/modal'
import { ProductViewContainer } from './product'

const settings = new ScanSettings()
settings.setSymbologyEnabled(Barcode.Symbology.EAN13, true)
settings.setSymbologyEnabled(Barcode.Symbology.EAN8, true)
settings.setSymbologyEnabled(Barcode.Symbology.UPCA, true)
settings.setSymbologyEnabled(Barcode.Symbology.UPCE, true)
settings.setSymbologyEnabled(Barcode.Symbology.CODE39, true)
settings.setSymbologyEnabled(Barcode.Symbology.ITF, true)
settings.setSymbologyEnabled(Barcode.Symbology.QR, true)
settings.setSymbologyEnabled(Barcode.Symbology.DATA_MATRIX, true)
settings.setSymbologyEnabled(Barcode.Symbology.CODE128, true)
settings.getSymbologySettings(Barcode.Symbology.CODE39).activeSymbolCounts = [
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
]

export const Scanner: React.FC = () => {
  const [barcode, setBarcode] = useState<string>()
  const scanner = useRef(null)

  const isAndroidMarshmallowOrNewer = () => {
    return Platform.OS === 'android' && Platform.Version >= 23
  }

  const hasCameraPermission = async () => {
    if (isAndroidMarshmallowOrNewer()) {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      )
      return granted
    } else {
      return true
    }
  }

  const cameraPermissionDenied = () => {
    BackHandler.exitApp()
  }

  const requestCameraPermission = async () => {
    if (isAndroidMarshmallowOrNewer()) {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Android Camera Permission has been granted.')
          startScanning()
        } else {
          console.log(
            'Android Camera Permission has been denied - the app will shut itself down.',
          )
          cameraPermissionDenied()
        }
      } catch (err) {
        console.warn(err)
      }
    } else {
      startScanning()
    }
  }

  const startScanning = () => {
    // @ts-ignore
    scanner.current.startScanning()
  }

  const stopScanning = () => {
    // @ts-ignore
    scanner.current.stopScanning()
  }

  const checkForCameraPermission = async () => {
    const hasPermission = await hasCameraPermission()
    if (hasPermission) {
      startScanning()
    } else {
      await requestCameraPermission()
    }
  }

  // @ts-ignore
  const handleAppStateChange = async nextAppState => {
    if (nextAppState.match(/inactive|background/)) {
      stopScanning()
    } else {
      checkForCameraPermission()
    }
  }

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange)
    checkForCameraPermission()
    return () => {
      AppState.removeEventListener('change', handleAppStateChange)
    }
  }, [])

  const handleDismiss = () => {
    setBarcode(undefined)
    startScanning()
  }

  // @ts-ignore
  const onScan = session => {
    const barcode = session.newlyRecognizedCodes[0].data
    stopScanning()
    setBarcode(barcode)
  }

  return (
    <View style={[t.flex1]}>
      {barcode && (
        <Modal onDismiss={handleDismiss}>
          <ProductViewContainer barcode={barcode} />
        </Modal>
      )}
      <BarcodePicker
        onScan={onScan}
        scanSettings={settings}
        ref={scanner}
        style={{ flex: 1 }}
      />
      <View
        style={[
          t.absolute,
          t.bottom0,
          t.wFull,
          t.h16,
          t.justifyCenter,
          t.bgBlack,
          t.opacity50,
        ]}
      >
        <Text style={[t.textWhite, t.textCenter, t.fontBold, t.text3xl]}>
          Scan barcode
        </Text>
      </View>
    </View>
  )
}
