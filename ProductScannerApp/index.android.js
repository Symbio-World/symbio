import { AppRegistry } from 'react-native';
import { Home } from './app/home';
import { name as appName } from './app.json';
import { ScanditModule } from 'scandit-react-native'
import { SCANDIT_ANDROID_API_KEY } from 'react-native-dotenv'

ScanditModule.setAppKey(SCANDIT_ANDROID_API_KEY);
AppRegistry.registerComponent(appName, () => Home);
