import 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'
import { TouchableOpacity } from 'react-native'

import { Tag } from './tag'

describe('Tag', () => {
  it('renders correctly', () => {
    const tree = create(<Tag title='Test' />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('calls onPress', () => {
    const testOnPress = jest.fn()
    const tree = create(<Tag title='Test' onPress={testOnPress} />)
    const root = tree.root
    const touchable = root.findByType(TouchableOpacity)
    touchable.props.onPress()
    expect(testOnPress).toHaveBeenCalled
  })
})
