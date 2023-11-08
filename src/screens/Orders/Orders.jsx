import { Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './Orders.styles'
import { Header } from '../../components'
import { useGetOrderQuery } from '../../services/shopApi'
import { FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'




const Orders = ({ navigation }) => {
    
    const { user, localId } = useSelector(state => state.auth)
    const { data, isLoading } = useGetOrderQuery(localId)
    const [ordenes, setOrdenes] = useState([])
    

    useEffect(() => {
        
        if (!isLoading) {
            const arrayDeOrdenes = Object.entries(data).map(([key, order]) => {
                return { id: key, ...order };
            });
            setOrdenes(arrayDeOrdenes)
            console.log(arrayDeOrdenes);
        }
    }, [isLoading])

    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Mis comidas'} />
            <View>
                {!isLoading && (
                    <FlatList
                        data={ordenes}
                        keyExtractor={order => order.id}
                        renderItem={({ item }) => (
                            <Text>{item.total}</Text>
                            // <CategoryItem category={item.title} navigation={navigation} />
                        )}
                    />
                )}
            </View>
        </SafeAreaView>
    )
}

export default Orders