import * as React from 'react'
import {
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native'
import { t } from 'react-native-tailwindcss'

import { SwipableModal } from '../ui-kit/SwipableModal'
import { RootModalStackParamList } from '../Navigation'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

type TestScreenRouteProp = RouteProp<RootModalStackParamList, 'Test'>

type TestScreenNavigationProp = StackNavigationProp<
  RootModalStackParamList,
  'Test'
>

type TestProps = {
  route: TestScreenRouteProp
  navigation: TestScreenNavigationProp
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
]

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export const Test: React.FC<TestProps> = ({ route, navigation }) => {
  const handleSnap = ({ nativeEvent: { x } }) => {
    if (x !== 0) {
      navigation.goBack()
    }
  }
  return (
    <SwipableModal onSnap={handleSnap}>
      <View style={[{ height: '80%' }, t.itemsStart, t.justifyStart]}>
        <TouchableOpacity
          style={{ width: 100, height: 100 }}
          onPress={() => navigation.goBack()}
        >
          <Text>Go back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ width: 100, height: 100 }}
          onPress={() => navigation.navigate('Test1')}
        >
          <Text>Go Test1</Text>
        </TouchableOpacity>

        <View>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SwipableModal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})
