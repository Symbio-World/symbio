import * as React from 'react'
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
  const navigation: any = {
    navigate: jest.fn(),
  }

  it('renders correctly', () => {
    const { toJSON } = render(<ScanBarcodeView navigation={navigation} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('triggers onScan prop', () => {
    const handleScan = jest.fn()
    const useRef = mockUseRef({ startScanning: jest.fn() })
    const { getByType } = render(
      <ScanBarcodeView
        onScan={handleScan}
        useRef={useRef}
        navigation={navigation}
      />,
    )
    fireEvent(getByType(BarcodePicker), 'onScan', fixture.session)
    expect(handleScan).toHaveBeenCalledWith(fixture.barcode)
  })
})
