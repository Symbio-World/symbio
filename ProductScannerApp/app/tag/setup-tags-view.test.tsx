import 'react-native'
import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { SetupTagsView } from './setup-tags-view'
import { Tag } from '../ui-kit/tag'

describe('SetupTagsView', () => {
  it('renders correctly', () => {
    const { toJSON } = render(<SetupTagsView />)
    expect(toJSON()).toMatchSnapshot()
  })

  it('calls onTagPress', () => {
    const handleTagPress = jest.fn()
    const tag = 'testTag'
    const { getByType } = render(
      <SetupTagsView tags={[tag]} onTagPress={handleTagPress} />,
    )
    fireEvent.press(getByType(Tag))
    expect(handleTagPress).toHaveBeenCalledWith(tag)
  })
})
