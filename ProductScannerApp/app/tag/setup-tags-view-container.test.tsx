import 'react-native'
import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { createSetupTagsViewContainer } from './setup-tags-view-container'
import { Button } from '../ui-kit/button'

describe('SetupTagsViewContainer', () => {
  it('renders correctly', () => {
    const SetupTagsViewContainer = createSetupTagsViewContainer({
      saveTags: jest.fn(),
      tags: [],
    })
    const { toJSON } = render(<SetupTagsViewContainer userId={'userId'} />)
    expect(toJSON()).toMatchSnapshot()
  }),
    it('submits tags', () => {
      const saveTags = jest.fn()
      const userId = 'userId'
      const tag = 'testTag'
      const SetupTagsViewContainer = createSetupTagsViewContainer({
        saveTags: saveTags,
        tags: [tag],
      })
      const setupTagsViewContainer = <SetupTagsViewContainer userId={userId} />
      const { getByText, getByType } = render(setupTagsViewContainer)
      fireEvent.press(getByText(tag))
      fireEvent.press(getByType(Button))
      expect(saveTags).toHaveBeenCalledWith(userId, ['testTag'])
    })

  it('deselects tags', () => {
    const saveTags = jest.fn()
    const userId = 'userId'
    const tag = 'testTag'
    const SetupTagsViewContainer = createSetupTagsViewContainer({
      saveTags: saveTags,
      tags: [tag],
    })
    const setupTagsViewContainer = <SetupTagsViewContainer userId={userId} />
    const { getByText, getByType } = render(setupTagsViewContainer)
    fireEvent.press(getByText(tag))
    fireEvent.press(getByText(tag))
    fireEvent.press(getByType(Button))
    expect(saveTags).toHaveBeenCalledWith(userId, [])
  })

  it('triggers onStore if stored', () => {
    const handleStore = jest.fn<any, any>()
    const SetupTagsViewContainer = createSetupTagsViewContainer({
      saveTags: jest.fn(() => Promise.resolve()),
      tags: [],
    })
    const setupTagsViewContainer = <SetupTagsViewContainer userId={'userId'} onStore={handleStore} />
    const { getByType } = render(setupTagsViewContainer)
    fireEvent.press(getByType(Button))
    expect(handleStore).toHaveBeenCalled()
  })
})
