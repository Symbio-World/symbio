import React from 'react'
import {
  Modal,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { t, color } from 'react-native-tailwindcss';

export const Overlay = ({ children, onDismiss }) => (
  <Modal
    transparent={true}
    visible={true}
    animationType='none'
    onRequestClose={onDismiss}
  >
    <TouchableWithoutFeedback
      onPress={onDismiss}
      testID="RNE__Overlay__backdrop"
    >
      <View
        testID="backdrop"
        style={[t.absolute, t.inset0, t.bgTransparent]}
      />
    </TouchableWithoutFeedback>

    <View style={[t.bgRed500, t.flex1, t.m12]}>
      {children}
    </View>
  </Modal>
)