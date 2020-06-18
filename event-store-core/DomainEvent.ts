import { ProductData } from '@symbio/barcode-processor-core'
import { Failure } from '@symbio/ts-lib'

export enum EventType {
  USER_SCANNED_BARCODE = 'USER_SCANNED_BARCODE',
  USER_SELECTED_PRINCIPLES = 'USER_SELECTED_PRINCIPLES',
  USER_SUBMITTED_EMAIL = 'USER_SUBMITTED_EMAIL',
  BARCODE_PROCESSED = 'BARCODE_PROCESSED',
  BARCODE_PROCESSED_EVENT_ARCHIVED = 'BARCODE_PROCESSED_EVENT_ARCHIVED',
  NOTIFICATION_TOKEN_GENERATED = 'NOTIFICATION_TOKEN_GENERATED',
  FRONTEND_ERROR_OCCURED = 'FRONTEND_ERROR_OCCURED',
}
export type SerializedError = {
  name?: string
  message?: string
  stack?: string
}
export type DeviceInfo = {
  brand?: string
  bundleId?: string
  deviceType?: string
  deviceName?: string
  apiLevel?: string
  baseOs?: string
  device?: string
  firstTimeInstallTime?: string
  lastUpdateTime?: string
}

export type FRONTEND_ERROR_OCCURED = {
  error: SerializedError
  deviceData: DeviceInfo
  type: EventType.FRONTEND_ERROR_OCCURED
}

export const frontendErrorOccured = (
  error: SerializedError,
  deviceData: DeviceInfo,
): FRONTEND_ERROR_OCCURED => ({
  type: EventType.FRONTEND_ERROR_OCCURED,
  error,
  deviceData,
})

export type UserScannedBarcode = {
  type: EventType.USER_SCANNED_BARCODE
  userId: string
  barcode: string
}
export const userScannedBarcode = (
  userId: string,
  barcode: string,
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

export type UserSubmittedEmail = {
  type: EventType.USER_SUBMITTED_EMAIL
  userId: string
  email: string
}
export const userSubmittedEmail = (
  userId: string,
  email: string,
): UserSubmittedEmail => ({
  type: EventType.USER_SUBMITTED_EMAIL,
  userId,
  email,
})

export type BarcodeProcessed = {
  type: EventType.BARCODE_PROCESSED
  barcode: string
  productData?: ProductData
  error?: string | Failure
}
export const barcodeProcessed = ({
  barcode,
  productData,
  error,
}: Omit<BarcodeProcessed, 'type'>): BarcodeProcessed => ({
  type: EventType.BARCODE_PROCESSED,
  barcode,
  productData,
  error,
})

export enum ArchiveReason {
  PRODUCT_DATA_CONTAINS_ONLY_LINKS = 'PRODUCT_DATA_CONTAINS_ONLY_LINKS',
}
export type BarcodeProcessedEventArchived = {
  type: EventType.BARCODE_PROCESSED_EVENT_ARCHIVED
  barcodeProcessed: BarcodeProcessed
  archiveReason: ArchiveReason
}
export const barcodeProcessedEventArchived = (
  barcodeProcessed: BarcodeProcessed,
  archiveReason: ArchiveReason,
): BarcodeProcessedEventArchived => ({
  type: EventType.BARCODE_PROCESSED_EVENT_ARCHIVED,
  barcodeProcessed,
  archiveReason,
})

export type NotificationTokenGenerated = {
  type: EventType.NOTIFICATION_TOKEN_GENERATED
  userId: string
  token: string
}
export const notificationTokenGenerated = ({
  userId,
  token,
}: Omit<NotificationTokenGenerated, 'type'>): NotificationTokenGenerated => ({
  type: EventType.NOTIFICATION_TOKEN_GENERATED,
  userId,
  token,
})

export type DomainEvent =
  | UserScannedBarcode
  | UserSelectedPrinciples
  | UserSubmittedEmail
  | BarcodeProcessed
  | BarcodeProcessedEventArchived
  | NotificationTokenGenerated
  | FRONTEND_ERROR_OCCURED
