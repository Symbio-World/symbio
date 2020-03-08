import React from 'react';
import {
  Text,
} from 'react-native';
import {
  Button,
  Card,
  Icon,
} from 'react-native-elements'

export const ErrorCard = ({ retryFunction }) => (
  <Card
    title='Something went wrong'
  >
    <Text style={{ marginBottom: 10 }}>
      Please retry
    </Text>
    <Button
      icon={<Icon name='code' color='#ffffff' />}
      buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
      title='RETRY'
      onPress={retryFunction}
    />
  </Card>
)