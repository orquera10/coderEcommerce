import { Text, View, SafeAreaView, Pressable, FlatList } from 'react-native'
import React from 'react'
import styles from './TarjetaOrden.style'





const TarjetaOrden = ({ navigation, item }) => {


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.containerFlat}
                data={item.cart}
                keyExtractor={order => order.id}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.quantity}</Text>
                        <Text>{item.calorias}</Text>
                    </View>
                    
                )}
            />
            <Text>{item.user}</Text>
            <Text>{item.total}</Text>
            <Text>{item.comida}</Text>
        </SafeAreaView>
    )
}

export default TarjetaOrden