import * as React from 'react'
import { View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ModalStackParamList } from './Navigation'

import { SwipableModal } from '../ui-kit/SwipableModal'

type NavigationProps = {
  navigation: StackNavigationProp<ModalStackParamList>
}

type CreateSwipableModal = <Props extends NavigationProps>(
  WrapperCompponent: React.FC<Props>,
) => React.FC<Props>

/* eslint-disable @typescript-eslint/naming-convention */
export const createSwipableModal: CreateSwipableModal = (WrapperCompponent) => {
  /* eslint-enable @typescript-eslint/naming-convention */
  return (props) => {
    const handleSnap = () => {
      props.navigation.goBack()
    }

    const containerStyle = { height: '90%' }
    return (
      <SwipableModal onSnap={handleSnap}>
        <View style={containerStyle}>
          <WrapperCompponent {...props} />
        </View>
      </SwipableModal>
    )
  }
}
