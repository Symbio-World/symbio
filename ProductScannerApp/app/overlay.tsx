import React from 'react'
import {
  Modal,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { t } from 'react-native-tailwindcss';

export const Overlay = ({ children, onDismiss }) => (
  <Modal
    transparent={true}
    visible={true}
    animationType='none'
    onRequestClose={onDismiss}
  >
    <TouchableWithoutFeedback onPress={onDismiss}>
      <View style={[t.absolute, t.inset0, t.bgTransparent]} />
    </TouchableWithoutFeedback>

    <View style={[t.flex1, t.m12]}>
      {children}
    </View>
  </Modal>
)