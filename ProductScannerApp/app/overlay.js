import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export const Overlay = ({ top, left, children }) => (
  <View
    style={{
      position: 'absolute',
      zIndex: 1,
      top,
      left,
    }}
  >
    {children}
  </View>
)