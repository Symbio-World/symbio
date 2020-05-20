import * as React from 'react'
import { render } from 'react-native-testing-library'
import { Button, ButtonStyle } from './Button'

describe('Button', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Button />)
    expect(toJSON()).toMatchSnapshot()
  })
  it('render transparent', () => {
    const { toJSON } = render(<Button variant={ButtonStyle.TRANSPARENT} />)
    expect(toJSON()).toMatchSnapshot()
  })
  it('render fill', () => {
    const { toJSON } = render(<Button variant={ButtonStyle.FILL} />)
    expect(toJSON()).toMatchSnapshot()
  })
  it('render outline', () => {
    const { toJSON } = render(<Button variant={ButtonStyle.OUTLINE} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
