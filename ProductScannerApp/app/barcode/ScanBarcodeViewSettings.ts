import { Barcode, ScanSettings } from 'scandit-react-native'

/* eslint-disable functional/immutable-data */
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

export { settings }
