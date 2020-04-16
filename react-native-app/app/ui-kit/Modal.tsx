import React from 'react'
import { Modal as RNModal, View, TouchableWithoutFeedback } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { t, color } from 'react-native-tailwindcss'

type Props = {
  children?: React.ReactNode
  onDismiss?: () => void
}

export const Modal: React.FC<Props> = ({ children, onDismiss }) => (
  <RNModal visible={true} animationType="slide" onRequestClose={onDismiss}>
    <View style={[t.bgGray500, t.p2, t.opacity50, t.absolute, t.z10, t.wFull]}>
      <TouchableWithoutFeedback onPress={onDismiss}>
        <Icon name="arrow-back" size={44} color={color.white} />
      </TouchableWithoutFeedback>
    </View>
    <View style={[t.flex1]}>{children}</View>
  </RNModal>
)
