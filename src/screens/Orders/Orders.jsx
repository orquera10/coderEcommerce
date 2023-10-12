import { Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import styles from './Orders.styles'
import { Header } from '../../components'


const Orders = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Mis comidas'} />
            <View>
                <Text>Orders</Text>
                <Text>Orders</Text>
                <Text>Orders</Text>
                <Text>Orders</Text>
                <Text>Orders</Text>
                <Text>Orders</Text>
            </View>
        </SafeAreaView>
    )
}

export default Orders