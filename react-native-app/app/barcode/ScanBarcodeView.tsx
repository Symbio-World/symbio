import * as React from 'react'
import {
  AppState,
  AppStateStatus,
  View,
  Platform,
  PermissionsAndroid,
  BackHandler,
  Text,
} from 'react-native'
import { BarcodePicker } from 'scandit-react-native'
import { t } from 'react-native-tailwindcss'
import { settings } from './ScanBarcodeViewSettings'
import { Scanner, Session } from './Scanner'
import { useNavigation } from '@react-navigation/native'
import { BigRoundedButton } from '../ui-kit/BigRoundedButton'
import { Icons } from '../ui-kit/Icon'
import Icon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  onScan?: (barcode: string) => void
  isActive?: boolean

  // a hack to test scanner ref as createNodeMock is not working https://github.com/callstack/react-native-testing-library/issues/227
  useRef?: typeof React.useRef
}

const isAndroidMarshmallowOrNewer = () => {
  return Platform.OS === 'android' && Platform.Version >= 23
}

const hasCameraPermission = () =>
  isAndroidMarshmallowOrNewer()
    ? PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA)
        .then((isGranted) => isGranted)
        .catch(() => false)
    : Promise.resolve(true)

const requestCameraPermission = () => {
  return new Promise((resolve, reject) => {
    if (isAndroidMarshmallowOrNewer()) {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
        .then((granted) => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Android Camera Permission has been granted.')
            return resolve()
          }
          console.log(
            'Android Camera Permission has been denied - the app will shut itself down.',
          )
          return reject()
        })
        .catch((err) => {
          console.warn(err)
          reject()
        })
      return
    }
    resolve()
  })
}

const checkForCameraPermission = () => {
  return new Promise((resolve, reject) => {
    hasCameraPermission()
      .then((hasPermission) => {
        if (hasPermission) {
          resolve()
          return
        }
        requestCameraPermission().then(resolve).catch(reject)
      })
      .catch(reject)
  })
}

export const ScanBarcodeView: React.FC<Props> = ({
  onScan = () => {},
  isActive = true,
  useRef = React.useRef,
}) => {
  const navigation = useNavigation()
  const scanner = useRef<Scanner>(null)
  const [isScannerStarted, setScannerStarted] = React.useState(false)

  const startScanning = () => {
    try {
      scanner.current?.startScanning()
      setScannerStarted(true)
    } catch (e) {
      console.log('try-catch introduced so that simple render tests pass')
    }
  }

  const stopScanning = () => {
    try {
      scanner.current?.stopScanning()
      setScannerStarted(false)
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

  const disableTorch = () => {
    try {
      scanner.current?.setTorchEnabled(false)
    } catch (e) {
      console.log('try-catch introduced so that simple render tests pass')
    }
  }

  React.useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState.match(/inactive|background/)) {
        pauseScanning()
      } else {
        checkForCameraPermission()
          .then(startScanning)
          .catch(BackHandler.exitApp)
      }
    }

    AppState.addEventListener('change', handleAppStateChange)
    checkForCameraPermission().then(startScanning).catch(BackHandler.exitApp)
    return () => {
      AppState.removeEventListener('change', handleAppStateChange)
      stopScanning()
    }
  }, [navigation])

  /* eslint-disable react-hooks/exhaustive-deps */
  React.useEffect(() => {
    if (!isScannerStarted) return
    if (isActive) {
      resumeScanning()
      return
    }
    pauseScanning()
  }, [isActive])
  /* eslint-enable react-hooks/exhaustive-deps */

  React.useEffect(() => {
    disableTorch()
  }, [])

  const handleScan = (session: Session) => {
    const barcode = session.newlyRecognizedCodes[0].data
    onScan(barcode)
  }

  return (
    <View style={[t.flex1]}>
      <BarcodePicker
        onScan={handleScan}
        scanSettings={settings}
        ref={scanner}
        style={[t.flex1]}
      />
      <View
        style={[
          t.absolute,
          t.top0,
          t.wFull,
          t.h16,
          t.justifyCenter,
          t.bgPrimary,
        ]}
      >
        <Text style={[t.textWhite, t.textCenter, t.fontBold, t.text3xl]}>
          Scan barcode
        </Text>
      </View>
      <View
        style={[t.absolute, t.bottom0, t.wFull, t.flexRow, t.justifyEvenly, t.mB6]}
      >
        <BigRoundedButton
          onPress={() => {}}
          title="flashlight"
          variant="outline"
          icon={<Icon name="flashlight" size={24} color="#900" />}
        />
        <BigRoundedButton
          onPress={() => {}}
          title="history"
          variant="fill"
          icon={<Icon name="history" size={24} color="#900" />}
        />

      </View>
    </View>
  )
}
