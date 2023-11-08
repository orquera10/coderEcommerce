import { Pressable, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import AntDesign from '@expo/vector-icons/AntDesign'
import styles from './SearchInput.style'

const SearchInput = ({ onSearch }) => {
  const [value, setValue] = useState('')

  const search = () => {
    onSearch(value)
  }

  const clearInput = () => {
    setValue('')
    onSearch('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Buscar comida"
      />
      <Pressable onPress={search} style={{marginHorizontal:10}}>
        <AntDesign name="search1" size={30} color={'#E3E9E2'} />
      </Pressable>
      <Pressable onPress={clearInput} style={{marginHorizontal:10}}>
        <AntDesign name="closecircleo" size={35} color={'#E3E9E2'} />
      </Pressable>
    </View>
  )
}

export default SearchInput
