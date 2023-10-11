import { Button, Text, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import styles from './Header.style'
import { clearUser } from '../../features/auth/authSlice'
import { deleteSession } from '../../db'
import { useDispatch } from 'react-redux'

const Header = ({ title, action }) => {
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(clearUser())
    deleteSession()
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Text style={styles.text}>{title}</Text>
      <Feather name="log-out" size={24} onPress={logout} />
    </View>
  )
}

export default Header