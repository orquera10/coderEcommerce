import { Text, View, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import styles from './Orders.styles'
import { Header } from '../../components'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import { TarjetaOrden } from './Components'




const Orders = ({ navigation }) => {

    const { ordenes } = useSelector(state => state.shop)


    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Mis comidas'} />
            <View>
                <FlatList
                    style={styles.containerFlat}
                    data={ordenes}
                    keyExtractor={order => order.id}
                    renderItem={({ item }) => (
                        <TarjetaOrden item={item} navigation={navigation} />
                    )}
                />
            </View>

        </SafeAreaView>
    )
}

export default Orders