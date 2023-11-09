import { FlatList, Pressable, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react'
import { Header } from '../../components'
import CartItem from './components/Cartitem'
import styles from './Cart.styles'
import { usePostOrderMutation } from '../../services/shopApi'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../features/cart/cartSlice'
import { setOrders } from '../../features/shop/shopSlice';

const Cart = () => {
    const cart = useSelector(state => state.cart.items)
    const total = useSelector(state => state.cart.total)
    const { ordenes } = useSelector(state => state.shop)
    const { user, localId } = useSelector(state => state.auth)
    const [triggerPost, result] = usePostOrderMutation()
    const dispatch = useDispatch();
    const [comida, setComida] = useState('Desayuno'); // Estado para rastrear la selección del usuario
    const opciones = { timeZone: 'America/Argentina/Buenos_Aires' }

    const renderItem = ({ item }) => <CartItem item={item} />

    const confirmCart = () => {
        const orden = {
            cart,
            comida,
            fecha: new Date().toLocaleString('es-ES', opciones),
            total,
            user
        }
        //agregamos la orden a firebase
        triggerPost({ ...orden, localId })
        //agregamos la orden a redux
        const updatedOrders = [...ordenes, { ...orden, id: Math.floor(Math.random() * 1000000) }];
        dispatch(setOrders(updatedOrders));

        dispatch(clearCart())

    }

    const handleFoodChange = (meal) => {
        setComida(meal);
    };

    return (
        <View style={styles.container}>
            <Header title={'Comida'} />
            {/* Elemento desplegable */}
            <View style={styles.containerFood}>
                <Text style={styles.textFood}>Elegi la comida del día</Text>
                <Picker
                    selectedValue={comida}
                    onValueChange={handleFoodChange}
                    style={styles.picker}
                >
                    <Picker.Item label="Desayuno" value="Desayuno" />
                    <Picker.Item label="Media Mañana" value="Media Mañana" />
                    <Picker.Item label="Almuerzo" value="Almuerzo" />
                    <Picker.Item label="Merienda" value="Merienda" />
                    <Picker.Item label="Cena" value="Cena" />
                </Picker>
            </View>
            <View style={styles.listContainer}>
                <FlatList
                    data={cart}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.containerCalorias}>
                    <Text style={styles.textCalorias}>{`Total ${total} calorias`}</Text>
                </View>
                <Pressable onPress={confirmCart} style={styles.cameraButton}>
                    <Text style={styles.text}>Confirmar</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Cart