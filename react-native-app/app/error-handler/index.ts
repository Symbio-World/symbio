import RNRestart from 'react-native-restart'
import { setJSExceptionHandler } from 'react-native-exception-handler'
import { Alert } from 'react-native'

setJSExceptionHandler((error: Error, isFatal: boolean) => {
  if (isFatal) {
    Alert.alert(
      'Unexpected error occurred',
      `
          Error: ${isFatal ? 'Fatal:' : ''} ${error.name} ${error.message}

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
