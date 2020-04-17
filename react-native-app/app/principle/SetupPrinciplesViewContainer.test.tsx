import * as React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import {
  SetupPrinciplesViewContainer,
  OnSave,
} from './SetupPrinciplesViewContainer'
import { SetupPrinciplesView } from './SetupPrinciplesView'
import { useAuth } from '../auth'
import { savePrinciples } from './savePrinciples'
import { getAllPrinciples } from './getAllPrinciples'

jest.mock('../auth')
jest.mock('./savePrinciples')
jest.mock('./getAllPrinciples')

describe('SetupPrinciplesViewContainer', () => {
  const user = { id: 'id' }

  beforeEach(() => {
    ;(useAuth as jest.Mock).mockImplementation(() => ({ user }))
    ;(savePrinciples as jest.Mock).mockImplementation(() => Promise.resolve())
    ;(getAllPrinciples as jest.Mock).mockImplementation(() => [])
  })

  it('renders correctly', () => {
    const { toJSON } = render(<SetupPrinciplesViewContainer />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('saves principles', () => {
    const principles = ['principle1', 'principle2', 'principle3']
    const selectedPrinciples = [principles[0]]
    ;(getAllPrinciples as jest.Mock).mockImplementation(() => principles)
    const { getByType } = render(<SetupPrinciplesViewContainer />)
    fireEvent(getByType(SetupPrinciplesView), 'onSubmit', selectedPrinciples)
    expect(savePrinciples).toHaveBeenCalledWith(user.id, selectedPrinciples)
  })

  it('triggers onSave', () => {
    const handleSave: OnSave = jest.fn()
    const { getByType } = render(
      <SetupPrinciplesViewContainer onSave={handleSave} />,
    )
    fireEvent(getByType(SetupPrinciplesView), 'onSubmit', [])
    expect(savePrinciples).toHaveBeenCalledWith(user.id, [])
    expect(handleSave).toHaveBeenCalled()
  })
})
