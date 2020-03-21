import 'react-native'
import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { createSetupPrinciplesViewContainer } from './setup-principles-view-container'
import { Button } from '../ui-kit/button'
import { useAuth } from '../auth'

jest.mock('../auth')

describe('SetupPrinciplesViewContainer', () => {
  const user = { id: 'id' }
  beforeEach(() => {
    (useAuth as jest.Mock).mockImplementation(() => ({ user }))
  })
  it('renders correctly', () => {
    const SetupPrinciplesViewContainer = createSetupPrinciplesViewContainer({
      savePrinciples: jest.fn(),
      principles: [],
    })
    const { toJSON } = render(<SetupPrinciplesViewContainer />)
    expect(toJSON()).toMatchSnapshot()
  }),
    it('saves principles', () => {
      const savePrinciples = jest.fn()
      const principle = 'principle'
      const SetupPrinciplesViewContainer = createSetupPrinciplesViewContainer({
        savePrinciples: savePrinciples,
        principles: [principle],
      })
      const setupPrinciplesViewContainer = <SetupPrinciplesViewContainer />
      const { getByText, getByType } = render(setupPrinciplesViewContainer)
      fireEvent.press(getByText(principle))
      fireEvent.press(getByType(Button))
      expect(savePrinciples).toHaveBeenCalledWith(user.id, [principle])
    })

  it('deselects principles', () => {
    const savePrinciples = jest.fn()
    const principles = 'principle'
    const SetupPrinciplesViewContainer = createSetupPrinciplesViewContainer({
      savePrinciples: savePrinciples,
      principles: [principles],
    })
    const setupPrinciplesViewContainer = <SetupPrinciplesViewContainer />
    const { getByText, getByType } = render(setupPrinciplesViewContainer)
    fireEvent.press(getByText(principles))
    fireEvent.press(getByText(principles))
    fireEvent.press(getByType(Button))
    expect(savePrinciples).toHaveBeenCalledWith(user.id, [])
  })

  it('triggers onSave if saved', () => {
    const handleSave = jest.fn<any, any>()
    const SetupPrinciplesViewContainer = createSetupPrinciplesViewContainer({
      savePrinciples: jest.fn(() => Promise.resolve()),
      principles: [],
    })
    const setupPrinciplesViewContainer = (
      <SetupPrinciplesViewContainer onSave={handleSave} />
    )
    const { getByType } = render(setupPrinciplesViewContainer)
    fireEvent.press(getByType(Button))
    expect(handleSave).toHaveBeenCalled()
  })
})
