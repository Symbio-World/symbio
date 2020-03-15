import 'react-native'
import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { Intro } from './intro'
import { Tag } from '../ui-kit/tag'

describe('Intro', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<Intro />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('calls onTagPress', () => {
    const testOnTagPress = jest.fn()
    const testTag = 'testTag'
    const { getByType } = render(<Intro tags={[testTag]} onTagPress={testOnTagPress} />)
    fireEvent.press(getByType(Tag))
    expect(testOnTagPress).toHaveBeenCalledWith(testTag)
  })
})
