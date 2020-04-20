import * as React from 'react'
import { View } from 'react-native'

import { SwipableModal } from '../ui-kit/SwipableModal'

export const createSwipableModal = (WrapperCompponent) => {
  return (props) => {
    const handleSnap = () => {
      props.navigation.goBack()
    }

    // TODO: change height 90% to move dynamic style
    return (
      <SwipableModal onSnap={handleSnap}>
        <View style={{ height: '90%' }}>
          <WrapperCompponent {...props} />
        </View>
      </SwipableModal>
    )
  }
}
