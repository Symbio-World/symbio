import * as React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { Button, ButtonStyle } from './Button'

describe('Button', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Button />)
    expect(toJSON()).toMatchSnapshot()
  })
  it('renders transparent variant', () => {
    const { toJSON } = render(<Button variant={ButtonStyle.TRANSPARENT} />)
    expect(toJSON()).toMatchSnapshot()
  })
  it('renders fill variant', () => {
    const { toJSON } = render(<Button variant={ButtonStyle.FILL} />)
    expect(toJSON()).toMatchSnapshot()
  })
  it('renders outline variant', () => {
    const { toJSON } = render(<Button variant={ButtonStyle.OUTLINE} />)
    expect(toJSON()).toMatchSnapshot()
  })
  it('renders title', () => {
    const { toJSON } = render(<Button title={'Button Test'} />)
    expect(toJSON()).toMatchSnapshot()
  })
  it('calls onPress', () => {
    const handlePress = jest.fn()
    const { getByType } = render(<Button onPress={handlePress} />)
    fireEvent(getByType(Button), 'onPress')
    expect(handlePress).toBeCalled()
  })
})
