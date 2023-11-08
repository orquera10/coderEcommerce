import { Text, View, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import styles from './Orders.styles'
import { Header } from '../../components'
import { useGetOrderQuery } from '../../services/shopApi'
import { FlatList } from 'react-native'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TarjetaOrden } from './Components'




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

    onSubmit = () => {

    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Mis comidas'} />
            <View>
                {!isLoading && (
                    <FlatList
                        style={styles.containerFlat}
                        data={ordenes}
                        keyExtractor={order => order.id}
                        renderItem={({ item }) => (
                                <TarjetaOrden item={item} navigation={navigation}/>
                        )}
                    />
                )}
            </View>
            {/* <Pressable style={styles.loginButton} onPress={onSubmit}>
                <Text style={styles.text}>Actualizar</Text>
            </Pressable> */}
        </SafeAreaView>
    )
}

export default Orders