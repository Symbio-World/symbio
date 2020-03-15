import 'react-native'
import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { TouchableOpacity } from 'react-native'
import { Principle } from './principle'

describe('Principle', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Principle title='Test' />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('can be selected', () => {
    const { toJSON } = render(<Principle title='Test' selected />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('calls onPress', () => {
    const handlePress = jest.fn()
    const { getByType } = render(<Principle title='Test' onPress={handlePress} />)
    fireEvent.press(getByType(TouchableOpacity))
    expect(handlePress).toHaveBeenCalled()
  })
})
