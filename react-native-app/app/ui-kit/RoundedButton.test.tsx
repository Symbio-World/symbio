import * as React from 'react'
import { render } from 'react-native-testing-library'
import { RoundedButton } from './RoundedButton'
import { ButtonStyle } from './Button'

describe('RoundedButton', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<RoundedButton />)
    expect(toJSON()).toMatchSnapshot()
  })
  it('render transparent', () => {
    const { toJSON } = render(
      <RoundedButton variant={ButtonStyle.TRANSPARENT} />,
    )
    expect(toJSON()).toMatchSnapshot()
  })
  it('render fill', () => {
    const { toJSON } = render(<RoundedButton variant={ButtonStyle.FILL} />)
    expect(toJSON()).toMatchSnapshot()
  })
  it('render outline', () => {
    const { toJSON } = render(<RoundedButton variant={ButtonStyle.OUTLINE} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
