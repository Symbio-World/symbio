import 'react-native'
import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { createSetupTagsScreenContainer } from './setup-tags-screen-container'

describe('SetupTagsScreenContainer', () => {
  it('renders correctly', () => {
    const SetupTagsScreenContainer = createSetupTagsScreenContainer({
      saveTags: jest.fn(),
      tags: [],
    })
    const { toJSON } = render(<SetupTagsScreenContainer userId={'userId'} />)
    expect(toJSON()).toMatchSnapshot()
  }),
    it('submits tags', () => {
      const saveTags = jest.fn()
      const userId = 'userId'
      const tag = 'testTag'
      const SetupTagsScreenContainer = createSetupTagsScreenContainer({
        saveTags: saveTags,
        tags: [tag],
      })
      const setupTagsScreenContainer = <SetupTagsScreenContainer userId={userId} />
      const { getByText, getByTestId, update } = render(setupTagsScreenContainer)
      fireEvent.press(getByText(tag))
      fireEvent.press(getByTestId('setup-tags-screen-submit'))
      expect(saveTags).toHaveBeenCalledWith(userId, ['testTag'])
    })

  it('deselects tags', () => {
    const saveTags = jest.fn()
    const userId = 'userId'
    const tag = 'testTag'
    const SetupTagsScreenContainer = createSetupTagsScreenContainer({
      saveTags: saveTags,
      tags: [tag],
    })
    const setupTagsScreenContainer = <SetupTagsScreenContainer userId={userId} />
    const { getByText, getByTestId } = render(setupTagsScreenContainer)
    fireEvent.press(getByText(tag))
    fireEvent.press(getByText(tag))
    fireEvent.press(getByTestId('setup-tags-screen-submit'))
    expect(saveTags).toHaveBeenCalledWith(userId, [])
  })

  it('triggers onStore if stored', () => {
    const handleStore = jest.fn<any, any>()
    const SetupTagsScreenContainer = createSetupTagsScreenContainer({
      saveTags: jest.fn(() => Promise.resolve()),
      tags: [],
    })
    const setupTagsScreenContainer = <SetupTagsScreenContainer userId={'userId'} onStore={handleStore} />
    const { getByTestId } = render(setupTagsScreenContainer)
    fireEvent.press(getByTestId('setup-tags-screen-submit'))
    expect(handleStore).toHaveBeenCalled()
  })
})
