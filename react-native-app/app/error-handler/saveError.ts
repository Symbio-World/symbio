import { frontendError } from '@symbio/event-store-core'
import DeviceInfo from 'react-native-device-info'
import { storeEvent } from '../event'
import { Platform } from 'react-native'

type SaveError = (message: string) => Promise<void>

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
  return JSON.stringify(info)
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
  return JSON.stringify(info)
}

export const getDeviceInfo = Platform.select({
  ios: getIOSLogs,
  android: getAndroidLogs,
  default: getIOSLogs,
})

export const saveError: SaveError = (message) =>
  getDeviceInfo()
    .then((info: string) => storeEvent(frontendError(message, info)))
    .catch((e: Error) =>
      console.warn('Error handler handle error =)', e.message),
    )
