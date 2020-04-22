export type Scanner = {
  startScanning: () => void
  stopScanning: () => void
  resumeScanning: () => void
  pauseScanning: () => void
}

export type Session = {
  newlyRecognizedCodes: Array<{ data: string }>
}
