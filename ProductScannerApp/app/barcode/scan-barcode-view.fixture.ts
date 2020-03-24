export const barcode = '6414893012318'
export const session = {
  allRecognizedCodes: [
    {
      isRecognized: true,
      isGs1DataCarrier: false,
      compositeFlag: 1,
      data: barcode,
      id: -1,
      symbology: 'ean13',
      rawData: [54, 52, 49, 52, 56, 57, 51, 48, 49, 50, 51, 49, 56],
      location: {
        bottomRight: [652, 234],
        topRight: [495, 242],
        topLeft: [552, 617],
        bottomLeft: [713, 583],
      },
    },
  ],
  newlyRecognizedCodes: [
    {
      isRecognized: true,
      isGs1DataCarrier: false,
      compositeFlag: 1,
      data: barcode,
      id: 0,
      symbology: 'ean13',
      rawData: [54, 52, 49, 52, 56, 57, 51, 48, 49, 50, 51, 49, 56],
      location: {
        bottomRight: [652, 234],
        topRight: [495, 242],
        topLeft: [552, 617],
        bottomLeft: [713, 583],
      },
    },
  ],
  newlyLocalizedCodes: [],
  shouldPause: false,
  shouldStop: false,
  rejectedCodes: [],
}
