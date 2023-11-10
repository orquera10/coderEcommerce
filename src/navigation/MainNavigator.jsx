import React, { useEffect, useState } from 'react'
import { setCameraImage, setProfileData, setUser } from '../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'

import AuthStackNavigator from './AuthStackNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import { fetchSession } from '../db'
import { useGetProfileImageQuery, useGetProfileDataQuery, useGetOrderQuery } from '../services/shopApi'
import { setMessages, setOrders } from '../features/shop/shopSlice'

const MainNavigator = () => {
    //const [user, setuser] = useState(null)
    const { user, localId } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const imagaData = useGetProfileImageQuery(localId)
    const profileData = useGetProfileDataQuery(localId)
    const ordersData = useGetOrderQuery(localId)
    const messagesData = useGetOrderQuery(localId)

    useEffect(() => {
        console.log('Main navigator data', imagaData.data)
        if (imagaData.data) {
            dispatch(setCameraImage(imagaData.data.image))
        }
    }, [imagaData.data])

    useEffect(() => {
        console.log('profile data es', profileData.data);
        if (profileData.data) {
            dispatch(setProfileData(profileData.data))
        }
    }, [profileData.data])

    useEffect(() => {

        if (ordersData.data) {
            const arrayDeOrdenes = Object.entries(ordersData.data).map(([key, order]) => {
                return { id: key, ...order };
            });
            dispatch(setOrders(arrayDeOrdenes))
            console.log('ARRAY orders es',arrayDeOrdenes);
        }
    }, [ordersData.data])

    useEffect(() => {
        console.log('profile data es', messagesData.data);
        if (messagesData.data) {
            const arrayDeMensajes = Object.entries(messagesData.data).map(([key, order]) => {
                return { id: key, ...order };
            });
            dispatch(setMessages(arrayDeMensajes))
            console.log('ARRAY messages es',arrayDeMensajes);
        }
    }, [messagesData.data])

    useEffect(() => {
        ; (async () => {
            try {
                const session = await fetchSession()
                console.log('Esta es la sesion', session)
                if (session.rows.length) {
                    console.log(session.rows._array[0])
                    const user = session.rows._array[0]
                    dispatch(setUser(user))
                }
            } catch (error) {
                console.log('Error en obtener ususario', error.message)
            }
        })()
    }, [])

    return user ? <BottomTabNavigator /> : <AuthStackNavigator />
}

export default MainNavigator