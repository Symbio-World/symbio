import React from 'react'
import {
  View,
  Button,
} from 'react-native'
import { t, color } from 'react-native-tailwindcss';

export const Overlay = ({ children, onClose }) => (
  <View
    style={[t.absolute, t.inset0, t.z30, color.red100]}
  >
    <Button 
      title="Press me"
      onPress={onClose}
    />
    {children}
  </View>
)