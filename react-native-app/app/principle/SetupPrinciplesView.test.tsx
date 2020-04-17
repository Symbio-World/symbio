import * as React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { Button } from '../ui-kit/Button'
import { SetupPrinciplesView } from './SetupPrinciplesView'
import { PrincipleView } from './PrincipleView'

describe('SetupPrinciplesView', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<SetupPrinciplesView />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('renders principles', () => {
    const principles = ['principle1', 'principle2', 'principle3']
    const { getAllByType } = render(
      <SetupPrinciplesView principles={principles} />,
    )
    expect(getAllByType(PrincipleView)).toHaveLength(principles.length)
  })

  it('calls onSubmit with selected principles', () => {
    const handleSubmit = jest.fn()
    const principles = ['principle1', 'principle2', 'principle3']
    const { getByType, getAllByType } = render(
      <SetupPrinciplesView principles={principles} onSubmit={handleSubmit} />,
    )
    const principleViews = getAllByType(PrincipleView)
    fireEvent(principleViews[0], 'onPress', principles[0])
    fireEvent(principleViews[1], 'onPress', principles[1])
    fireEvent.press(getByType(Button))
    expect(handleSubmit).toHaveBeenCalledWith([principles[0], principles[1]])
  })

  it('deselects principles', () => {
    const handleSubmit = jest.fn()
    const principles = ['principle1', 'principle2', 'principle3']
    const { getByType, getAllByType } = render(
      <SetupPrinciplesView principles={principles} onSubmit={handleSubmit} />,
    )
    const principleViews = getAllByType(PrincipleView)
    fireEvent(principleViews[0], 'onPress', principles[0])
    fireEvent(principleViews[0], 'onPress', principles[0])
    fireEvent.press(getByType(Button))
    expect(handleSubmit).toHaveBeenCalledWith([])
  })
})
