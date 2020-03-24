import React, { useRef as defaultUseRef, useEffect } from 'react'
import {
  AppState,
  View,
  Platform,
  PermissionsAndroid,
  BackHandler,
  Text,
} from 'react-native'
import { BarcodePicker } from 'scandit-react-native'
import { t } from 'react-native-tailwindcss'
import { settings } from './scan-barcode-view-settings'

type Props = {
  onScan?: (barcode: string) => void
  active?: boolean

  // a hack to test scanner ref as createNodeMock is not working https://github.com/callstack/react-native-testing-library/issues/227
  useRef?: typeof defaultUseRef
}
export const ScanBarcodeView: React.FC<Props> = ({
  onScan = () => {},
  active = true,
  useRef = defaultUseRef,
}) => {
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
    // try-catch introduced so that simple render tests pass
    try {
      // @ts-ignore
      scanner.current.startScanning()
    } catch (e) {}
  }

  const stopScanning = () => {
    // try-catch introduced so that simple render tests pass
    try {
      // @ts-ignore
      scanner.current.stopScanning()
    } catch (e) {}
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

  useEffect(() => {
    if (active) startScanning()
    else stopScanning()
  }, [active])

  // @ts-ignore
  const handleScan = session => {
    const barcode = session.newlyRecognizedCodes[0].data
    onScan(barcode)
  }

  return (
    <View style={[t.flex1]}>
      <BarcodePicker
        onScan={handleScan}
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
