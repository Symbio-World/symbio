import { Barcode } from '@symbio/barcode-processor-core'

export type Scanner = {
  startScanning: () => void
  stopScanning: () => void
}

export type Session = {
  newlyRecognizedCodes: Array<{ data: Barcode }>
}
