import 'react-native'
import React from 'react'
import { shallow } from 'enzyme';
import { createIntroContainer } from './intro-container'
import { Intro } from './intro'

describe('IntroContainer', () => {
  it('renders correctly', () => {
    const IntroContainer = createIntroContainer({ storeUserTags: jest.fn() })
    const wrapper = shallow(<IntroContainer user={{ uid: 'uid' }} />).toJSON()
    expect(wrapper).toMatchSnapshot()
  }),

  it('submits tags', () => {
    const testStoreUserTags = jest.fn()
    const testUser = { uid: 'uid' }
    const IntroContainer = createIntroContainer({ storeUserTags: testStoreUserTags })
    let tree: ReactTestRenderer
    act(() => {
      tree = create(<IntroContainer user={testUser} />)
    })
    const root = tree!.root
    const intro = root.findByType(Intro)
    act(() => {
      intro.props.onTagPress('testTag')
    })
    act(() => {
      intro.props.onSubmit()
    })
    expect(testStoreUserTags).toHaveBeenCalledWith(testUser, ['testTag'])
  })
})
