import * as React from 'react'
import { View, Text, Linking } from 'react-native'
import { t } from 'react-native-tailwindcss'
import { Button } from '../ui-kit/Button'
import { Modal } from '../ui-kit/Modal'

type Props = {
  barcode?: string
}
export const ProductNotFound: React.FC<Props> = ({ barcode }) => {
  const [isPressed, setPressed] = React.useState<boolean>(false)
  return (
    <View style={[t.flex1, t.justifyCenter, t.m5]}>
      {isPressed && (
        <Modal onDismiss={() => setPressed(false)}>
          <View style={[t.flex1, t.justifyCenter, t.m5]}>
            <Text>Thanks for helping, this feature will be available soon</Text>
          </View>
        </Modal>
      )}
      <Text>
        Unfortunately we could not find any data for this barcode{' '}
        <Text>{barcode}</Text>
      </Text>
      <View style={[t.mY5]}>
        <Button
          title="Search with google"
          onPress={() =>
            Linking.openURL(`https://www.google.com/search?q=${barcode}`)
          }
        />
      </View>
      <Button title="Add Manually" onPress={() => setPressed(true)} />
    </View>
  )
}
