import { FlatList, SafeAreaView, View } from 'react-native'

import { CategoryItem } from './components'
import { Header } from '../../components'
import React from 'react'
import dataCategories from '../../data/dataCategories'
import styles from './Home.style'

const Home = ({setCategorySelected}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Alimentos'} />
      <View style={styles.listContainer}>
        <FlatList
          data={dataCategories}
          keyExtractor={category => category.title}
          renderItem={({ item }) => (
            <CategoryItem category={item.title} setCategorySelected={setCategorySelected} />
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home
