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