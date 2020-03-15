import 'react-native'
import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { SetupTagsScreen } from './setup-tags-screen'
import { Tag } from '../ui-kit/tag'

describe('SetupTagsScreen', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<SetupTagsScreen />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('calls onTagPress', () => {
    const handleTagPress = jest.fn()
    const tag = 'testTag'
    const { getByType } = render(
      <SetupTagsScreen tags={[tag]} onTagPress={handleTagPress} />,
    )
    fireEvent.press(getByType(Tag))
    expect(handleTagPress).toHaveBeenCalledWith(tag)
  })
})
