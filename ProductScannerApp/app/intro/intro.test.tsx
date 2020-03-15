import 'react-native'
import React from 'react'
import { create } from 'react-test-renderer'

import { Intro } from './intro'
import { Tag } from '../ui-kit/tag'

describe('Intro', () => {
  it('renders correctly', () => {
    const tree = create(<Intro />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('calls onTagPress', () => {
    const testOnTagPress = jest.fn()
    const tree = create(<Intro tags={['testTag']} onTagPress={testOnTagPress} />)
    const root = tree.root
    const tags = root.findAllByType(Tag)
    expect(tags.length).toBe(1)
    tags[0].props.onPress()
    expect(testOnTagPress).toHaveBeenCalledWith('testTag')
  })
})
