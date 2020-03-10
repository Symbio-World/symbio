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
  links
}) => (
  <ScrollView style={[t.bgWhite, t.flex1, t.p4]}>
    <Image style={[t.h40]} source={{ uri: image }} />
    <Text style={[t.textLg, t.textCenter]}>{name}</Text>
    <Text>{description}</Text>
    {links.map(link => (
      <Text
        style={[t.textBlue600, t.m2]}
        onPress={() => Linking.openURL(`https://translate.google.com/translate?sl=auto&tl=en&u=${link}`)}
      >
        {link}
      </Text>
    ))}
  </ScrollView>
)