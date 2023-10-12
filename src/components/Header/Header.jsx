import { Text, View } from 'react-native'
import React from 'react'
import styles from './Header.style'


const Header = ({ title, action }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header