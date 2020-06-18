import * as React from 'react'
import { render } from 'react-native-testing-library'
import { ModalActionsView } from './ModalActionsView'
import { CloseButton } from './CloseButton'

describe('ModalActionsView', () => {
  it('renders correctly', () => {
    const { toJSON } = render(
      <ModalActionsView>
        <CloseButton />
      </ModalActionsView>,
    )
    expect(toJSON()).toMatchSnapshot()
  })
})
