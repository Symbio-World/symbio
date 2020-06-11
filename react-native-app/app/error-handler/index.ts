import RNRestart from 'react-native-restart'
import { setJSExceptionHandler } from 'react-native-exception-handler'
import { Alert } from 'react-native'

import { saveError } from './saveError'

setJSExceptionHandler((error: Error, isFatal: boolean) => {
  if (isFatal) {
    saveError(error.message)
    Alert.alert(
      'Unexpected error occurred',
      `
          Sorry, ${isFatal ? 'fatal:' : ''} error happen by name ${error.name}.
          Our team already looking into issue.
          We will need to restart the app.
          `,
      [
        {
          text: 'Restart',
          onPress: () => {
            RNRestart.Restart()
          },
        },
      ],
    )
  }
})
