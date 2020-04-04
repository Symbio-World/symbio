import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { SetupPrinciplesView } from './SetupPrinciplesView'
import { Principle } from './Principle'

describe('SetupPrinciplesView', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<SetupPrinciplesView />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('calls onPrinciplePress', () => {
    const handlePrinciplePress = jest.fn()
    const principle = 'principle'
    const { getByType } = render(
      <SetupPrinciplesView
        principles={[principle]}
        onPrinciplePress={handlePrinciplePress}
      />,
    )
    fireEvent.press(getByType(Principle))
    expect(handlePrinciplePress).toHaveBeenCalledWith(principle)
  })
})
