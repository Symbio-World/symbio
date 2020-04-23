import * as React from 'react'
import { render } from 'react-native-testing-library'
import { Text } from 'react-native'

import { ModalCard } from './ModalCard'

describe('ModalCard', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
      <ModalCard>
        <Text>Test</Text>
      </ModalCard>,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
