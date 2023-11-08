import { Image, Pressable, Text, View } from 'react-native'

import Feather from '@expo/vector-icons/Feather'
import React from 'react'
import styles from './CartItem.styles'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../../features/cart/cartSlice'
import { colors } from '../../../constants/colors'

const Cartitem = ({ item }) => {

    const dispatch = useDispatch()

    const handleRemoveToCart = () => {
        dispatch(removeItem(item.id));
    }
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={{
                        uri: item.thumbnail,
                    }}
                />
            </View>
            <View>
                <Text style={styles.name}>{item.title}</Text>
            </View>
            <View style={styles.details}>
                <View >
                    <Text style={{color: colors.primary}}>qty. {item.quantity}</Text>
                    <Text style={{color: colors.primary, fontWeight: 'bold'}}>cal. {item.calorias}</Text>
                </View>
                <Pressable onPress={handleRemoveToCart}>
                    <Feather name="trash" size={24} color={colors.quaternary} />
                </Pressable>
            </View>
        </View>
    )
}

export default Cartitem