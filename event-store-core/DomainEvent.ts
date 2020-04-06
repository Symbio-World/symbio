import { ProductData, Barcode } from '@symbio/barcode-processor-core'
import { Failure } from '@symbio/ts-lib'

export enum EventType {
  USER_SCANNED_BARCODE = 'USER_SCANNED_BARCODE',
  USER_SELECTED_PRINCIPLES = 'USER_SELECTED_PRINCIPLES',
  USER_LEFT_FEEDBACK = 'USER_LEFT_FEEDBACK',
  BARCODE_PROCESSED = 'BARCODE_PROCESSED',
}

export type UserScannedBarcode = {
  type: EventType.USER_SCANNED_BARCODE
  userId: string
  barcode: Barcode
}
export const userScannedBarcode = (
  userId: string,
  barcode: Barcode,
): UserScannedBarcode => ({
  type: EventType.USER_SCANNED_BARCODE,
  userId,
  barcode,
})

export type UserSelectedPrinciples = {
  type: EventType.USER_SELECTED_PRINCIPLES
  userId: string
  principles: string[]
}
export const userSelectedPrinciples = (
  userId: string,
  principles: string[],
): UserSelectedPrinciples => ({
  type: EventType.USER_SELECTED_PRINCIPLES,
  userId,
  principles,
})

export type UserLeftFeedback = {
  type: EventType.USER_LEFT_FEEDBACK
  userId: string
  feedback: string
}
export const userLeftFeedback = (
  userId: string,
  feedback: string,
): UserLeftFeedback => ({
  type: EventType.USER_LEFT_FEEDBACK,
  userId,
  feedback,
})

export type BarcodeProcessed = {
  type: EventType.BARCODE_PROCESSED
  barcode: Barcode
  productData?: ProductData
  error?: string | Failure
}
export const barcodeProcessed = (
  barcode: string,
  productData?: ProductData,
  error?: string | Failure,
): BarcodeProcessed => ({
  type: EventType.BARCODE_PROCESSED,
  barcode,
  productData,
  error,
})

export type DomainEvent =
  | UserScannedBarcode
  | UserSelectedPrinciples
  | UserLeftFeedback
  | BarcodeProcessed
