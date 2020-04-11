import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { BarcodePicker } from 'scandit-react-native'
import { ScanBarcodeView } from './ScanBarcodeView'
import * as fixture from './ScanBarcodeView.fixture'

const mockUseRef = (obj: unknown) => () =>
  Object.defineProperty({}, 'current', {
    get: () => obj,
    set: () => {},
  })

describe('ScanBarcodeView', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<ScanBarcodeView />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('triggers onScan prop', () => {
    const handleScan = jest.fn()
    const useRef = mockUseRef({ startScanning: jest.fn() })
    const { getByType } = render(
      <ScanBarcodeView onScan={handleScan} useRef={useRef} />,
    )
    fireEvent(getByType(BarcodePicker), 'onScan', fixture.session)
    expect(handleScan).toHaveBeenCalledWith(fixture.barcode)
  })

  it('starts scanning when active prop is true', () => {
    const startScanning = jest.fn()
    const useRef = mockUseRef({ startScanning })
    render(<ScanBarcodeView active useRef={useRef} />)
    expect(startScanning).toHaveBeenCalled()
  })

  it('stops scanning when active prop is false', () => {
    const stopScanning = jest.fn()
    const useRef = mockUseRef({ stopScanning })
    render(<ScanBarcodeView active={false} useRef={useRef} />)
    expect(stopScanning).toHaveBeenCalled()
  })
})
