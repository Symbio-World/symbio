import 'react-native'
import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { SetupPrinciplesScreen } from './SetupPrinciplesScreen'
import { SetupPrinciplesViewContainer } from './SetupPrinciplesViewContainer'

jest.mock('@react-navigation/native')

describe('SetupPrinciplesScreen', () => {
  const navigation: any = {
    navigate: jest.fn(),
  }

  it('renders correctly', () => {
    const { toJSON } = render(<SetupPrinciplesScreen navigation={navigation} />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('navigates out on save', () => {
    const { getByType } = render(
      <SetupPrinciplesScreen navigation={navigation} />,
    )
    fireEvent(getByType(SetupPrinciplesViewContainer), 'onSave')
    expect(navigation.navigate).toHaveBeenCalledWith('ScanBarcodeScreen')
  })
})
