import * as React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { TouchableOpacity } from 'react-native'
import { PrincipleView } from './PrincipleView'

describe('PrincipleView', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<PrincipleView title="Test" />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('can be selected', () => {
    const { toJSON } = render(<PrincipleView title="Test" selected />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('calls onPress', () => {
    const handlePress = jest.fn()
    const { getByType } = render(
      <PrincipleView title="Test" onPress={handlePress} />,
    )
    fireEvent.press(getByType(TouchableOpacity))
    expect(handlePress).toHaveBeenCalled()
  })
})
