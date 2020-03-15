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
    const handleTagPress = jest.fn()
    const tag = 'testTag'
    const { getByType } = render(
      <Intro tags={[tag]} onTagPress={handleTagPress} />,
    )
    fireEvent.press(getByType(Tag))
    expect(handleTagPress).toHaveBeenCalledWith(tag)
  })
})
