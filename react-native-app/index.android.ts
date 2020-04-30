import { AppRegistry } from 'react-native'
import { App } from './app/App'
import { name as appName } from './app.json'
import { ScanditModule } from 'scandit-react-native'
import { scandit } from './app/config'
import { enableScreens } from 'react-native-screens'

enableScreens()

ScanditModule.setAppKey(scandit.androidKey)
AppRegistry.registerComponent(appName, () => App)
