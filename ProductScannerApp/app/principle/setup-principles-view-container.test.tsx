import 'react-native'
import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { createSetupPrinciplesViewContainer } from './setup-principles-view-container'
import { Button } from '../ui-kit/button'

describe('SetupPrinciplesViewContainer', () => {
  it('renders correctly', () => {
    const SetupPrinciplesViewContainer = createSetupPrinciplesViewContainer({
      savePrinciples: jest.fn(),
      principles: [],
    })
    const { toJSON } = render(<SetupPrinciplesViewContainer userId={'userId'} />)
    expect(toJSON()).toMatchSnapshot()
  }),
    it('saves principles', () => {
      const savePrinciples = jest.fn()
      const userId = 'userId'
      const principle = 'principle'
      const SetupPrinciplesViewContainer = createSetupPrinciplesViewContainer({
        savePrinciples: savePrinciples,
        principles: [principle],
      })
      const setupPrinciplesViewContainer = <SetupPrinciplesViewContainer userId={userId} />
      const { getByText, getByType } = render(setupPrinciplesViewContainer)
      fireEvent.press(getByText(principle))
      fireEvent.press(getByType(Button))
      expect(savePrinciples).toHaveBeenCalledWith(userId, [principle])
    })

  it('deselects principles', () => {
    const savePrinciples = jest.fn()
    const userId = 'userId'
    const principles = 'principle'
    const SetupPrinciplesViewContainer = createSetupPrinciplesViewContainer({
      savePrinciples: savePrinciples,
      principles: [principles],
    })
    const setupPrinciplesViewContainer = <SetupPrinciplesViewContainer userId={userId} />
    const { getByText, getByType } = render(setupPrinciplesViewContainer)
    fireEvent.press(getByText(principles))
    fireEvent.press(getByText(principles))
    fireEvent.press(getByType(Button))
    expect(savePrinciples).toHaveBeenCalledWith(userId, [])
  })

  it('triggers onSave if saved', () => {
    const handleSave = jest.fn<any, any>()
    const SetupPrinciplesViewContainer = createSetupPrinciplesViewContainer({
      savePrinciples: jest.fn(() => Promise.resolve()),
      principles: [],
    })
    const setupPrinciplesViewContainer = (
      <SetupPrinciplesViewContainer userId={'userId'} onSave={handleSave} />
    )
    const { getByType } = render(setupPrinciplesViewContainer)
    fireEvent.press(getByType(Button))
    expect(handleSave).toHaveBeenCalled()
  })
})
