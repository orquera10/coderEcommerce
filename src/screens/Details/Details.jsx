import { Image, Pressable, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { addItem } from '../../features/cart/cartSlice'
import styles from './Details.style'
import { useDispatch } from 'react-redux'
import { Header, ModalErrorGeneral } from '../../components'
import { useState } from 'react'

const Details = ({ route }) => {
  const { product } = route.params
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)

  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: 1 }))
    setModalVisible(true)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Detalle'} />
      <View style={styles.containerImg}>
        <Image style={styles.image} source={{ uri: product.thumbnail }} resizeMode='contain' />
      </View>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{`${product.calorias} calorias`}</Text>
      <Pressable onPress={handleAddToCart} style={styles.buttonLogout}>
        <Text style={styles.textLogout}>Agregar a comida</Text>
      </Pressable>
      <ModalErrorGeneral modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </SafeAreaView>
  )
}

export default Details