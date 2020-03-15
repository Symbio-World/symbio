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
      const storeUserTags = jest.fn()
      const user = { uid: 'uid' }
      const tag = 'testTag'
      const IntroContainer = createIntroContainer({
        storeUserTags: storeUserTags,
        tags: [tag],
      })
      const introContainer = <IntroContainer user={user} />
      const { getByText, getByTestId, update } = render(introContainer)
      fireEvent.press(getByText(tag))
      fireEvent.press(getByTestId('intro-submit'))
      expect(storeUserTags).toHaveBeenCalledWith(user, ['testTag'])
    })

  it('deselects tags', () => {
    const storeUserTags = jest.fn()
    const user = { uid: 'uid' }
    const tag = 'testTag'
    const IntroContainer = createIntroContainer({
      storeUserTags: storeUserTags,
      tags: [tag],
    })
    const introContainer = <IntroContainer user={user} />
    const { getByText, getByTestId } = render(introContainer)
    fireEvent.press(getByText(tag))
    fireEvent.press(getByText(tag))
    fireEvent.press(getByTestId('intro-submit'))
    expect(storeUserTags).toHaveBeenCalledWith(user, [])
  })

  it('triggers onStore if stored', () => {
    const handleStore = jest.fn<any, any>()
    const IntroContainer = createIntroContainer({
      storeUserTags: jest.fn(() => Promise.resolve()),
      tags: [],
    })
    const introContainer = <IntroContainer user={{ uid: 'uid' }} onStore={handleStore} />
    const { getByTestId } = render(introContainer)
    fireEvent.press(getByTestId('intro-submit'))
    expect(handleStore).toHaveBeenCalled()
  })
})
