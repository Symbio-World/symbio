import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import { t, color } from 'react-native-tailwindcss';

export const ProductCard = ({
  image,
  name,
  description,
}) => (
  <View style={[t.bgWhite, t.flex1, t.p4]}>
    <Image style={[t.h40]} source={{ uri: image }} />
    <Text style={[t.textLg, t.textCenter]}>{name}</Text>
    <Text>{description}</Text>
  </View>
)