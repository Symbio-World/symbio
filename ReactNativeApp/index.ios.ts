import { AppRegistry } from 'react-native'
import { App } from './app/App'
import { name as appName } from './app.json'
import { ScanditModule } from 'scandit-react-native'
import { scandit } from './app/config'

ScanditModule.setAppKey(scandit.iosKey)
AppRegistry.registerComponent(appName, () => App)
