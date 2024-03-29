import { FlatList, Text, TouchableOpacity, View, SafeAreaView, Image } from 'react-native'
import { Header, SearchInput } from '../../components'
import React, { useEffect, useState } from 'react'
import styles from './Products.style'
import { useGetProductsByCategoryQuery } from '../../services/shopApi'
import { useSelector } from 'react-redux'

const Products = ({ navigation }) => {
  const category = useSelector(state => state.shop.categorySelected)
  const [keyword, setKeyword] = useState('')
  const { data, isLoading } = useGetProductsByCategoryQuery(category)
  const [productsFiltered, setProductsFiltered] = useState([]);

  useEffect(() => {
    
    if (data) {
      const filtered = Object.values(data).filter(product =>
        product.title.includes(keyword)
      )
      setProductsFiltered(filtered);
    }
  }, [data, keyword])

  return (
    <SafeAreaView style={styles.container}>
      <Header title={category} />
      <SearchInput onSearch={setKeyword} />
      <View style={styles.listContainer}>
        {!isLoading && (
          <FlatList
            data={productsFiltered}
            numColumns={2}
            columnWrapperStyle={styles.weapperStyle}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.productContainer}
                onPress={() => navigation.navigate('Details', { product: item })}
              >
                <Image
                  style={styles.image}
                  source={{
                    uri: item.thumbnail,
                  }}
                  resizeMode='contain'
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{`cal ${item.calorias}`}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </SafeAreaView>
  )
}

export default Products