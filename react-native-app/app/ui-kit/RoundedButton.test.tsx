import * as React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { RoundedButton } from './RoundedButton'
import { ButtonStyle } from './Button'
import { Icons } from './Icon'

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
  it('render inner title', () => {
    const { toJSON } = render(<RoundedButton innerTitle={'Button Test'} />)
    expect(toJSON()).toMatchSnapshot()
  })
  it('render outer title', () => {
    const { toJSON } = render(<RoundedButton outerTitle={'Button Test'} />)
    expect(toJSON()).toMatchSnapshot()
  })
  it('render outer title and icon', () => {
    const { toJSON } = render(
      <RoundedButton outerTitle={'Close'} icon={Icons.CROSS} />,
    )
    expect(toJSON()).toMatchSnapshot()
  })
  it('simulate button click', () => {
    const handlePress = jest.fn()
    const { getByType } = render(<RoundedButton onPress={handlePress} />)
    fireEvent(getByType(RoundedButton), 'onPress')
    expect(handlePress).toBeCalled()
  })
})
