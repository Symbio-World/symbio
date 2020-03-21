import React, { useState } from 'react'
import { View, Image, Text, ScrollView } from 'react-native'
import { t } from 'react-native-tailwindcss'
import { ProductData } from 'fetcher-core'
import { Button } from '../ui-kit/button'
import { Modal } from '../ui-kit/modal'
import { FeedbackViewContainer } from '../feedback'

type Props = Omit<ProductData, 'links'>

export const ProductView: React.FC<Props> = props => {
  const [tellPressed, setTellPressed] = useState<boolean>(false)
  return (
    <ScrollView style={[t.bgWhite, t.flex1]}>
      {tellPressed && (
        <Modal onDismiss={() => setTellPressed(false)}>
          <FeedbackViewContainer
            title="What is missing?"
            onSave={() => setTellPressed(false)}
          />
        </Modal>
      )}
      <Image
        style={[t.h56, t.bgGray200]}
        source={{ uri: props.image }}
        resizeMode="contain"
      />
      <View style={[t.p8]}>
        <Text style={[t.textLg, t.mB8]}>{props.name}</Text>
        <Text>{props.description}</Text>
        <Text style={[t.fontBold, t.mT8]}>Ingredients</Text>
        <Text>{props.ingredients ? props.ingredients : '-'}</Text>
        <Text style={[t.fontBold, t.mT8]}>Allergens</Text>
        {props.allergens ? (
          props.allergens.map(t => <Text>{t}</Text>)
        ) : (
          <Text>'-'</Text>
        )}
        <Text style={[t.fontBold, t.mT8]}>Origin</Text>
        <Text>{props.origin}</Text>
        <View style={[t.mT5]}>
          <Button
            title="Tell us what's missing"
            onPress={() => setTellPressed(true)}
          />
        </View>
      </View>
    </ScrollView>
  )
}
