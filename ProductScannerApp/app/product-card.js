import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

export const ProductCard = ({
  image,
  name,
  children,
}) => (
  <View>
    <Image
      style={{width: 50, height: 50}}
      source={{ uri: image }}
    />
    <Text>{name}</Text>
    <Text>{children}</Text>
  </View>
)