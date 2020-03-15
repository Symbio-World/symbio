import 'react-native'
import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'
import { createIntroContainer } from './intro-container'

describe('IntroContainer', () => {
  it('renders correctly', () => {
    const IntroContainer = createIntroContainer({
      storeUserTags: jest.fn(),
      tags: [],
    })
    const { toJSON } = render(<IntroContainer user={{ uid: 'uid' }} />)
    expect(toJSON()).toMatchSnapshot()
  }),
    it('submits tags', () => {
      const testStoreUserTags = jest.fn()
      const testUser = { uid: 'uid' }
      const testTag = 'testTag'
      const IntroContainer = createIntroContainer({
        storeUserTags: testStoreUserTags,
        tags: [testTag],
      })
      const introContainer = <IntroContainer user={testUser} />
      const { getByText, getByTestId, update } = render(introContainer)
      fireEvent.press(getByText(testTag))
      fireEvent.press(getByTestId('intro-submit'))
      expect(testStoreUserTags).toHaveBeenCalledWith(testUser, ['testTag'])
    })

    it('deselects tags', () => {
      const testStoreUserTags = jest.fn()
      const testUser = { uid: 'uid' }
      const testTag = 'testTag'
      const IntroContainer = createIntroContainer({
        storeUserTags: testStoreUserTags,
        tags: [testTag],
      })
      const introContainer = <IntroContainer user={testUser} />
      const { getByText, getByTestId, update } = render(introContainer)
      fireEvent.press(getByText(testTag))
      fireEvent.press(getByText(testTag))
      fireEvent.press(getByTestId('intro-submit'))
      expect(testStoreUserTags).toHaveBeenCalledWith(testUser, [])
    })
})
