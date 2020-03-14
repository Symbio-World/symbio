import React from 'react'
import { Image, Text, ScrollView } from 'react-native'
import { t } from 'react-native-tailwindcss'
import { ProductData } from 'fetcher-core'

type Props = Omit<ProductData, 'links'>

export const ProductCard: React.FC<Props> = props => (
  <ScrollView style={[t.bgWhite, t.flex1, t.p4]}>
    <Image style={[t.h40]} source={{ uri: props.image }} />
    <Text style={[t.textLg, t.textCenter]}>{props.name}</Text>
    <Text>{props.description}</Text>
    <Text>{props.ingredients}</Text>
    <Text>{props.allergens}</Text>
    <Text>{props.origin}</Text>
  </ScrollView>
)
