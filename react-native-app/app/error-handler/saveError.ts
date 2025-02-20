import {
  frontendErrorOccured,
  DeviceInfo as DeviceInfoType,
} from '@symbio/event-store-core'
import DeviceInfo from 'react-native-device-info'
import { storeEvent } from '../event'
import { Platform } from 'react-native'
import { serializeError } from 'serialize-error'

type SaveError = (error: Error) => Promise<void>

const getGeneralInfo = async () => {
  const [brand, bundleId, deviceType, deviceName] = await Promise.all([
    Promise.resolve(DeviceInfo.getBrand()),
    Promise.resolve(DeviceInfo.getBundleId()),
    Promise.resolve(DeviceInfo.getDeviceType()),
    DeviceInfo.getDeviceName(),
  ])
  return { brand, bundleId, deviceType, deviceName }
}

const getIOSLogs = async () => {
  const [generalInfo] = await Promise.all([getGeneralInfo()])
  const info = {
    ...generalInfo,
  }
  return info
}

const getAndroidLogs = async () => {
  const [
    generalInfo,
    apiLevel,
    baseOs,
    device,
    firstTimeInstallTime,
    lastUpdateTime,
  ] = await Promise.all([
    getGeneralInfo(),
    DeviceInfo.getApiLevel(),
    DeviceInfo.getBaseOs(),
    DeviceInfo.getDevice(),
    DeviceInfo.getFirstInstallTime(),
    DeviceInfo.getLastUpdateTime(),
  ])
  const info = {
    ...generalInfo,
    apiLevel,
    baseOs,
    device,
    firstTimeInstallTime,
    lastUpdateTime,
  }
  return info
}

export const getDeviceInfo = Platform.select({
  ios: getIOSLogs,
  android: getAndroidLogs,
  default: getIOSLogs,
})

export const saveError: SaveError = (error: Error) =>
  getDeviceInfo()
    .then((info: DeviceInfoType) => {
      const errorSerilazed = serializeError(error)
      storeEvent(frontendErrorOccured(errorSerilazed, info))
    })
    .catch((e: Error) =>
      console.warn('Error during saving error =) ', e.message),
    )
