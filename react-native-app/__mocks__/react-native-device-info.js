// @ts-nocheck
/* eslint-disable functional/immutable-data */
/* eslint-disable filenames/match-regex */
module.exports = {
  default: {
    getBrand: () => 'brand',
    getBundleId: () => 'bundleId',
    getDeviceType: () => 'deviceType',
    getDeviceName: () => Promise.resolve('deviceName'),
    getApiLevel: () => Promise.resolve('apiLevel'),
    getBaseOs: () => Promise.resolve('baseOs'),
    getDevice: () => Promise.resolve('device'),
    getFirstInstallTime: () => Promise.resolve('firstTimeInstallTime'),
    getLastUpdateTime: () => Promise.resolve('lastUpdateTime'),
  },
}
