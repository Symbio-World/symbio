import 'react-native'
import * as React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { ScanBarcodeViewContainer } from './ScanBarcodeViewContainer'
import { ScanBarcodeView } from './ScanBarcodeView'
import { useAuth } from '../auth'
import { saveBarcode } from './saveBarcode'

jest.mock('../auth')
jest.mock('./saveBarcode')

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => jest.fn(),
}))

describe('ScanBarcodeViewContainer', () => {
  const user = { id: 'id' }

  beforeEach(() => {
    ;(useAuth as jest.Mock).mockImplementation(() => ({ user }))
    ;(saveBarcode as jest.Mock).mockImplementation(() => Promise.resolve())
  })

  it('renders correctly', () => {
    const { toJSON } = render(<ScanBarcodeViewContainer />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('saves barcode', () => {
    const barcode = 'barcode'
    const { getByType } = render(<ScanBarcodeViewContainer />)
    fireEvent(getByType(ScanBarcodeView), 'onScan', barcode)
    expect(saveBarcode).toHaveBeenCalledWith(user.id, barcode)
  })

  it('triggers onScan callback', () => {
    const barcode = 'barcode'
    const handleScan = jest.fn()
    const { getByType } = render(
      <ScanBarcodeViewContainer onScan={handleScan} />,
    )
    fireEvent(getByType(ScanBarcodeView), 'onScan', barcode)
    expect(handleScan).toHaveBeenCalledWith(barcode)
  })
})
