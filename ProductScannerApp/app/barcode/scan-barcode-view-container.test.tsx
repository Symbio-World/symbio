import 'react-native'
import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { createScanBarcodeViewContainer } from './scan-barcode-view-container'
import { ScanBarcodeView } from './scan-barcode-view'
import { useAuth } from '../auth'
import { ProductViewContainer } from '../product'
import { Modal } from '../ui-kit/modal'

jest.mock('../auth')

describe('ScanBarcodeViewContainer', () => {
  const user = { id: 'id' }

  beforeEach(() => {
    ;(useAuth as jest.Mock).mockImplementation(() => ({ user }))
  })

  it('renders correctly', () => {
    const ScanBarcodeViewContainer = createScanBarcodeViewContainer({
      saveBarcode: jest.fn(),
    })
    const { toJSON } = render(<ScanBarcodeViewContainer />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('saves barcode', () => {
    const saveBarcode = jest.fn()
    const barcode = 'barcode'
    const ScanBarcodeViewContainer = createScanBarcodeViewContainer({
      saveBarcode,
    })
    const scanBarcodeViewContainer = <ScanBarcodeViewContainer />
    const { getByType } = render(scanBarcodeViewContainer)
    fireEvent(getByType(ScanBarcodeView), 'onScan', barcode)
    expect(saveBarcode).toHaveBeenCalledWith(user.id, barcode)
  })

  it('shows product view on scan', () => {
    const ScanBarcodeViewContainer = createScanBarcodeViewContainer({
      saveBarcode: jest.fn(),
    })
    const scanBarcodeViewContainer = <ScanBarcodeViewContainer />
    const { getByType } = render(scanBarcodeViewContainer)
    fireEvent(getByType(ScanBarcodeView), 'onScan', 'barcode')
    expect(getByType(ProductViewContainer))
  })

  it('stops scanning on scan', () => {
    const ScanBarcodeViewContainer = createScanBarcodeViewContainer({
      saveBarcode: jest.fn(),
    })
    const scanBarcodeViewContainer = <ScanBarcodeViewContainer />
    const { getByType } = render(scanBarcodeViewContainer)
    fireEvent(getByType(ScanBarcodeView), 'onScan', 'barcode')
    const scanBarcodeView = getByType(ScanBarcodeView)
    expect(scanBarcodeView.props.active).toEqual(false)
  })

  it('can dismiss modal', () => {
    const ScanBarcodeViewContainer = createScanBarcodeViewContainer({
      saveBarcode: jest.fn(),
    })
    const scanBarcodeViewContainer = <ScanBarcodeViewContainer />
    const { getByType, queryAllByType } = render(scanBarcodeViewContainer)
    fireEvent(getByType(ScanBarcodeView), 'onScan', 'barcode')
    const modal = getByType(Modal)
    fireEvent(modal, 'onDismiss')
    expect(queryAllByType(Modal).length).toEqual(0)
  })

  it('starts scanning when modal is dismissed', () => {
    const ScanBarcodeViewContainer = createScanBarcodeViewContainer({
      saveBarcode: jest.fn(),
    })
    const scanBarcodeViewContainer = <ScanBarcodeViewContainer />
    const { getByType } = render(scanBarcodeViewContainer)
    fireEvent(getByType(ScanBarcodeView), 'onScan', 'barcode')
    const modal = getByType(Modal)
    fireEvent(modal, 'onDismiss')
    const scanBarcodeView = getByType(ScanBarcodeView)
    expect(scanBarcodeView.props.active).toEqual(true)
  })
})
