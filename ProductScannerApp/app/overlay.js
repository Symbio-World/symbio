import React from 'react'
import {
  View,
} from 'react-native'
import {
  Button,
  Icon,
} from 'react-native-elements'

export const Overlay = ({ top, left, children, onClose }) => (
  <View
    style={{
      position: 'absolute',
      zIndex: 1,
      top,
      left,
    }}
  >
    <Button 
      icon={<Icon name='close' size={30} color='red' />}
      style={{ position: 'absolute', top: -10, left: -10 }}
      type='clear'
      onPress={onClose}
    />
    {children}
  </View>
)