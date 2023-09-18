import fonts from './src/global/fonts'
import { useFonts } from 'expo-font'
import {Home, Products} from './src/screens'
import { useState } from 'react'

export default function App() {
  const [categorySelected, setCategorySelected] = useState('')

  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null
  }

  return categorySelected ? <Products category={categorySelected}/> : <Home setCategorySelected={setCategorySelected}/>
}


// return (
//   <NavigationContainer>
//     <Stack.Navigator
//       initialRouteName="Home"
//       screenOptions={({ route, navigation }) => ({
//         headerShown: false,
//         /* header: () => (
//           <View style={{ flexDirection: 'row', marginTop: 50 }}>
//             <Button onPress={() => navigation.goBack()} title="Go Back" />
//             <Header title={route.name} />
//           </View>
//         ), */
//       })}
//     >
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Products" component={Products} />
//       <Stack.Screen name="Details" component={Details} />
//     </Stack.Navigator>
//   </NavigationContainer>
// )