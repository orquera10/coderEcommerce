import { Text, View, SafeAreaView, Pressable, FlatList, Image } from 'react-native'
import React from 'react'
import styles from './TarjetaOrden.style'





const TarjetaOrden = ({ navigation, item }) => {


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.contTitulo}>
                <Text style={[styles.text1, { fontSize: 30 }]}>{item.comida}</Text>
                <Text style={styles.text1}>{item.fecha}</Text>
            </View >

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    horizontal
                    style={styles.containerFlat}
                    data={item.cart}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.tarjetaItem}>
                            <Text style={[styles.text2, { fontSize: 17, textAlign: 'center' }]}>{item.title}</Text>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: item.thumbnail,
                                }}
                                resizeMode='contain'
                            />
                            <View style={styles.contTitulo}>
                                <Text style={[styles.text2, { fontSize: 17 }]}>cal. {item.calorias}</Text>
                                <Text style={[styles.text2, { fontWeight: '400' }]}>qty. {item.quantity}</Text>
                            </View>

                        </View>

                    )}
                />
            </View>

            <Text style={[styles.text1, { fontSize: 30, textAlign: 'center' }]}>Total de calorías: {item.total}</Text>

        </SafeAreaView>
    )
}

export default TarjetaOrden