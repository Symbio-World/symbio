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
  it('renders transparent variant', () => {
    const { toJSON } = render(
      <RoundedButton variant={ButtonStyle.TRANSPARENT} />,
    )
    expect(toJSON()).toMatchSnapshot()
  })
  it('renders fill variant', () => {
    const { toJSON } = render(<RoundedButton variant={ButtonStyle.FILL} />)
    expect(toJSON()).toMatchSnapshot()
  })
  it('renders outline variant', () => {
    const { toJSON } = render(<RoundedButton variant={ButtonStyle.OUTLINE} />)
    expect(toJSON()).toMatchSnapshot()
  })
  it('renders inner title', () => {
    const { toJSON } = render(<RoundedButton innerTitle={'Button Test'} />)
    expect(toJSON()).toMatchSnapshot()
  })
  it('renders outer title', () => {
    const { toJSON } = render(<RoundedButton outerTitle={'Button Test'} />)
    expect(toJSON()).toMatchSnapshot()
  })
  it('renders outer title and icon', () => {
    const { toJSON } = render(
      <RoundedButton outerTitle={'Close'} icon={Icons.CROSS} />,
    )
    expect(toJSON()).toMatchSnapshot()
  })
  it('calls onPress', () => {
    const handlePress = jest.fn()
    const { getByType } = render(<RoundedButton onPress={handlePress} />)
    fireEvent(getByType(RoundedButton), 'onPress')
    expect(handlePress).toBeCalled()
  })
})
