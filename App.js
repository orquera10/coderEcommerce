import fonts from './src/global/fonts'
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigator from './src/navigation/MainNavigator'
import { PaperProvider } from 'react-native-paper'
import store from './src/store'
import { init } from './src/db'

init()
  .then(() => console.log('DB initialized'))
  .catch(err => console.log('DB failed', err.message))

export default function App() {
  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  )
}