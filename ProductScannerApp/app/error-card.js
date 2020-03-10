import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

export const ErrorCard = ({ retryFunction }) => (
  <View>
    <Image
      style={{width: 50, height: 50}}
      source={{ uri: image }}
    />
    <Text>{name}</Text>
    <Text>{children}</Text>
  </View>
)