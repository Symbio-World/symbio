import 'react-native'
import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { TouchableOpacity } from 'react-native'
import { Tag } from './tag'

describe('Tag', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Tag title='Test' />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('can be selected', () => {
    const { toJSON } = render(<Tag title='Test' selected />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('calls onPress', () => {
    const testOnPress = jest.fn()
    const { getByType } = render(<Tag title='Test' onPress={testOnPress} />)
    fireEvent.press(getByType(TouchableOpacity))
    expect(testOnPress).toHaveBeenCalled
  })
})
