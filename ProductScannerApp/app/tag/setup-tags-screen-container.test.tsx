import 'react-native'
import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { createSetupTagsScreenContainer } from './setup-tags-screen-container'

describe('SetupTagsScreenContainer', () => {
  it('renders correctly', () => {
    const SetupTagsScreenContainer = createSetupTagsScreenContainer({
      storeUserTags: jest.fn(),
      tags: [],
    })
    const { toJSON } = render(<SetupTagsScreenContainer user={{ uid: 'uid' }} />)
    expect(toJSON()).toMatchSnapshot()
  }),
    it('submits tags', () => {
      const storeUserTags = jest.fn()
      const user = { uid: 'uid' }
      const tag = 'testTag'
      const SetupTagsScreenContainer = createSetupTagsScreenContainer({
        storeUserTags: storeUserTags,
        tags: [tag],
      })
      const setupTagsScreenContainer = <SetupTagsScreenContainer user={user} />
      const { getByText, getByTestId, update } = render(setupTagsScreenContainer)
      fireEvent.press(getByText(tag))
      fireEvent.press(getByTestId('setup-tags-screen-submit'))
      expect(storeUserTags).toHaveBeenCalledWith(user, ['testTag'])
    })

  it('deselects tags', () => {
    const storeUserTags = jest.fn()
    const user = { uid: 'uid' }
    const tag = 'testTag'
    const SetupTagsScreenContainer = createSetupTagsScreenContainer({
      storeUserTags: storeUserTags,
      tags: [tag],
    })
    const setupTagsScreenContainer = <SetupTagsScreenContainer user={user} />
    const { getByText, getByTestId } = render(setupTagsScreenContainer)
    fireEvent.press(getByText(tag))
    fireEvent.press(getByText(tag))
    fireEvent.press(getByTestId('setup-tags-screen-submit'))
    expect(storeUserTags).toHaveBeenCalledWith(user, [])
  })

  it('triggers onStore if stored', () => {
    const handleStore = jest.fn<any, any>()
    const SetupTagsScreenContainer = createSetupTagsScreenContainer({
      storeUserTags: jest.fn(() => Promise.resolve()),
      tags: [],
    })
    const setupTagsScreenContainer = <SetupTagsScreenContainer user={{ uid: 'uid' }} onStore={handleStore} />
    const { getByTestId } = render(setupTagsScreenContainer)
    fireEvent.press(getByTestId('setup-tags-screen-submit'))
    expect(handleStore).toHaveBeenCalled()
  })
})
