import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { t } from 'react-native-tailwindcss'
import { Principle } from './principle'
import { Button } from '../ui-kit/button'

type Props = {
  principles?: string[]
  selectedPrinciples?: string[]
  onPrinciplePress?: (principle: string) => void
  onSubmit?: () => void
}
export const SetupPrinciplesView: React.FC<Props> = ({
  principles = [],
  selectedPrinciples = [],
  onPrinciplePress = () => {},
  onSubmit = () => {},
}) => {
  return (
    <View style={[t.m5]}>
      <ScrollView>
        <View>
          <Text style={[t.text4xl, t.fontBold, t.mY4]}>👋Hey There</Text>
          <Text style={[t.mY4]}>
            <Text style={[t.fontBold]}>Should I Buy</Text> lets you understand
            if the products you find in the supermarket fit your values.
          </Text>
          <Text style={[t.fontBold]}>What is important to you?</Text>
          <View style={[t.flexRow, t.flexWrap, t.mY4]}>
            {principles.map(t => (
              <Principle
                key={t}
                title={t}
                onPress={() => onPrinciplePress(t)}
                selected={selectedPrinciples.includes(t)}
              />
            ))}
          </View>
        </View>
        <View style={[t.h24]} />
      </ScrollView>
      <View style={[t.absolute, t.bottom0, t.wFull, t.bgWhite]}>
        <Button onPress={onSubmit} title='Get Started' />
      </View>
    </View>
  )
}