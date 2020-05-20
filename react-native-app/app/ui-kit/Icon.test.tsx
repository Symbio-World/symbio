import * as React from 'react'
import { render } from 'react-native-testing-library'
import { Icon, IconsEnum } from './Icon'

describe('Icon', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Icon iconType={IconsEnum.DISK} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
