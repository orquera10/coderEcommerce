import { Image, Text, View } from 'react-native'

import { Header } from '../../components'
import React from 'react'
import styles from './Details.style'

const Details = ({ route }) => {
  const { product } = route.params
  return (
    <View style={styles.container}>
      <Header title={'Detalle'} />
      <View style={styles.containerImg}>
        <Image style={styles.image} source={{ uri: product.thumbnail }} resizeMode='contain'/>
      </View>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{`${product.calorias} calorias`}</Text>
    </View>
  )
}

export default Details
