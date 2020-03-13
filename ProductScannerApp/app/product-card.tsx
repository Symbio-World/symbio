import React from 'react';
import {
  Image,
  Linking,
  Text,
  ScrollView,
} from 'react-native';
import { t, color } from 'react-native-tailwindcss';

export const ProductCard = ({
  image,
  name,
  description,
  ingredients,
  allergens,
  origin,
}) => (
  <ScrollView style={[t.bgWhite, t.flex1, t.p4]}>
    <Image style={[t.h40]} source={{ uri: image }} />
    <Text style={[t.textLg, t.textCenter]}>{name}</Text>
    <Text>{description}</Text>
    <Text>{ingredients}</Text>
    <Text>{allergens}</Text>
    <Text>{origin}</Text>
  </ScrollView>
)