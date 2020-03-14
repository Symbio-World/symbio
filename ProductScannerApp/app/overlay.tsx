import React from 'react'
import { Modal, TouchableWithoutFeedback, View } from 'react-native'
import { t } from 'react-native-tailwindcss'

type Props = {
  children?: React.ReactNode
  onDismiss?: () => void
}

export const Overlay: React.FC<Props> = ({ children, onDismiss }) => (
  <Modal
    transparent={true}
    visible={true}
    animationType="none"
    onRequestClose={onDismiss}
  >
    <TouchableWithoutFeedback onPress={onDismiss}>
      <View style={[t.absolute, t.inset0, t.bgTransparent]} />
    </TouchableWithoutFeedback>

    <View style={[t.flex1, t.m12]}>{children}</View>
  </Modal>
)
