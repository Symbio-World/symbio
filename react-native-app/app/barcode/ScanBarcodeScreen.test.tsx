import 'react-native'
import React from 'react'
import { render } from 'react-native-testing-library'
import { useIsFocused } from '@react-navigation/native'
import { ScanBarcodeScreen } from './ScanBarcodeScreen'
import { ScanBarcodeViewContainer } from './ScanBarcodeViewContainer'

jest.mock('@react-navigation/native')

describe('ScanBarcodeScreen', () => {
  const navigation: any = {
    navigate: jest.fn(),
  }

  beforeEach(() => {
    ;(useIsFocused as jest.Mock).mockImplementation(() => true)
  })

  it('renders correctly', () => {
    const { toJSON } = render(<ScanBarcodeScreen navigation={navigation} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('passes isFocused', () => {
    const isFocused = false
    ;(useIsFocused as jest.Mock).mockImplementation(() => false)
    const { getByType } = render(<ScanBarcodeScreen navigation={navigation} />)
    const scanBarcodeViewContainer = getByType(ScanBarcodeViewContainer)
    expect(scanBarcodeViewContainer.props.isActive).toEqual(isFocused)
  })
})
