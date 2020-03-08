import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export const Overlay = (barcode) => (
  <View
    key={barcode.data}
    style={{
      position: 'absolute',
      zIndex: 1,
      top: barcode.top,
      left: barcode.left,
      borderRadius: 5,
      backgroundColor: '#00ff00'
    }}
  >
    <Text>
      {barcode.data}
    </Text>
  </View>
)