import { Image, Pressable, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect } from 'react'

import styles from './CategoryItem.style'

const CategoryItem = ({ category, setCategorySelected }) => {
  return (
    <Pressable
      onPress={() => setCategorySelected(category)}
      style={styles.container}
    >
      <View style={styles.contentContainer}>
        <Text style={styles.text}>{category}</Text>
      </View>
    </Pressable>
  )
}

export default CategoryItem
