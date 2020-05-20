import * as React from 'react'
import { render } from 'react-native-testing-library'
import { Icon, Icons } from './Icon'

describe('Icon', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Icon iconType={Icons.DISK} />)
    expect(toJSON()).toMatchSnapshot()
  })
})
