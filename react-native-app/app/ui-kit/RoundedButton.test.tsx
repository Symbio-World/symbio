import * as React from 'react'
import { render } from 'react-native-testing-library'
import { RoundedButton, RoundedButtonStyle } from './RoundedButton'

describe('RoundedButton', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<RoundedButton />)
    expect(toJSON()).toMatchSnapshot()
  })
  it('render transparent', () => {
    const { toJSON } = render(
      <RoundedButton buttonStyleType={RoundedButtonStyle.TRANSPARENT} />,
    )
    expect(toJSON()).toMatchSnapshot()
  })
  it('render fill', () => {
    const { toJSON } = render(
      <RoundedButton buttonStyleType={RoundedButtonStyle.FILL} />,
    )
    expect(toJSON()).toMatchSnapshot()
  })
  it('render outline', () => {
    const { toJSON } = render(
      <RoundedButton buttonStyleType={RoundedButtonStyle.OUTLINE} />,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
