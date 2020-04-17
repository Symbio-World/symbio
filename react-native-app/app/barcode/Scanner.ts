export type Scanner = {
  startScanning: () => void
  stopScanning: () => void
}

export type Session = {
  newlyRecognizedCodes: Array<{ data: string }>
}
