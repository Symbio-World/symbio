import React from 'react';
import {
  Text,
} from 'react-native';
import {
  Button,
  Card,
  Icon,
} from 'react-native-elements'

export const ProductCard = ({
  image,
  name,
  children,
}) => (
  <Card
    title={name}
    image={{
      uri: image
    }}
  >
    <Text style={{ marginBottom: 10 }}>
      {children}
    </Text>
    <Button
      icon={<Icon name='code' color='#ffffff' />}
      buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
      title='VIEW NOW'
    />
  </Card>
)