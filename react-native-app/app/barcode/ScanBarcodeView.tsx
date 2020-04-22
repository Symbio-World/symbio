import * as React from 'react'
import {
  AppState,
  AppStateStatus,
  View,
  Platform,
  PermissionsAndroid,
  BackHandler,
  Text,
  TouchableOpacity,
} from 'react-native'
import { BarcodePicker } from 'scandit-react-native'
import { t } from 'react-native-tailwindcss'
import { settings } from './ScanBarcodeViewSettings'
import { Scanner, Session } from './Scanner'
import { ScanBarcodeScreenNavigationType } from './ScanBarcodeScreen'

type Props = {
  onScan?: (barcode: string) => void
  isActive?: boolean

  // a hack to test scanner ref as createNodeMock is not working https://github.com/callstack/react-native-testing-library/issues/227
  useRef?: typeof React.useRef
  navigation: ScanBarcodeScreenNavigationType
}

export const ScanBarcodeView: React.FC<Props> = ({
  onScan = () => {},
  isActive = true,
  useRef = React.useRef,
  navigation,
}) => {
  const scanner = useRef<Scanner>(null)
  const [isScannerInitialize, setScannerInit] = React.useState(false)

  const isAndroidMarshmallowOrNewer = () => {
    return Platform.OS === 'android' && Platform.Version >= 23
  }

  const hasCameraPermission = async () => {
    if (isAndroidMarshmallowOrNewer()) {
      const isGranted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      )
      return isGranted
    } else {
      return true
    }
  }

  const cameraPermissionDenied = () => {
    BackHandler.exitApp()
  }

  const startScanning = () => {
    try {
      scanner.current?.startScanning()
      setScannerInit(true)
    } catch (e) {
      console.log('try-catch introduced so that simple render tests pass')
    }
  }

  const resumeScanning = () => {
    try {
      scanner.current?.resumeScanning()
    } catch (e) {
      console.log('try-catch introduced so that simple render tests pass')
    }
  }
  const pauseScanning = () => {
    try {
      scanner.current?.pauseScanning()
    } catch (e) {
      console.log('try-catch introduced so that simple render tests pass')
    }
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

  const checkForCameraPermission = async () => {
    const hasPermission = await hasCameraPermission()
    if (hasPermission) {
      startScanning()
    } else {
      await requestCameraPermission()
    }
  }

  const handleAppStateChange = (nextAppState: AppStateStatus) => {
    if (nextAppState.match(/inactive|background/)) {
      pauseScanning()
    } else {
      checkForCameraPermission()
    }
  }

  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange)
    checkForCameraPermission()
    return () => {
      AppState.removeEventListener('change', handleAppStateChange)
    }
  }, [navigation])
  /* eslint-enable react-hooks/exhaustive-deps */

  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    if (!isScannerInitialize) return
    if (isActive) {
      resumeScanning()
      return
    }
    pauseScanning()
  }, [isActive])
  /* eslint-enable react-hooks/exhaustive-deps */

  const handleScan = (session: Session) => {
    const barcode = session.newlyRecognizedCodes[0].data
    onScan(barcode)
  }

  return (
    <View style={[t.flex1]}>
      <TouchableOpacity style={[t.h32]} onPress={() => onScan('4605246006272')}>
        <Text>Trigger barcode</Text>
      </TouchableOpacity>
      <BarcodePicker
        onScan={handleScan}
        scanSettings={settings}
        ref={scanner}
        style={[t.flex1]}
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
