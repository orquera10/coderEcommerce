import * as ImagePicker from 'expo-image-picker'
import { Image, Pressable, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser, setCameraImage } from '../../features/auth/authSlice'
import styles from './Profile.styles'
import { usePostProfileImageMutation } from '../../services/shopApi'
import { deleteSession } from '../../db'
import { Header } from '../../components'

const Profile = ({ navigation }) => {
    const image = useSelector(state => state.auth.imageCamera)
    const { localId, nombre, pais, peso, altura } = useSelector(state => state.auth)
    const [triggerSaveProfileImage, result] = usePostProfileImageMutation()
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(clearUser())
        deleteSession()
    }

    const verifyCameraPermissions = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        if (!granted) {
            return false
        }
        return true
    }

    const pickImage = async () => {
        const isCameraOk = await verifyCameraPermissions()

        if (isCameraOk) {
            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [9, 16],
                base64: true,
                quality: 0.4,
            })
            if (!result.canceled) {
                console.log(result.assets)
                dispatch(
                    setCameraImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
                )
            }
        }
    }

    const confirmImage = () => {
        triggerSaveProfileImage({ image, localId })
            .unwrap()
            .then(result => console.log(result))

    }

    return (
        <View style={styles.container}>
            <Header title={'Profile'} />
            {image ? (
                <Image
                    source={{
                        uri: image,
                    }}
                    style={styles.image}
                    resizeMode="cover"
                />
            ) : (
                <Image
                    source={{
                        uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    }}
                    style={styles.image}
                    resizeMode="cover"
                />
            )}
            <View style={styles.fichaPrifile}>
                <Text style={[styles.text1,{fontSize: 20}]}>{nombre}</Text>
                <Text style={[styles.text1,{fontSize: 16}]}>{pais}</Text>
                <View style={styles.fichaPrifileSub}>
                    <Text style={[styles.text1,{fontSize: 16, marginHorizontal: 10}]}>Peso: {peso} Kg</Text>
                    <Text style={[styles.text1,{fontSize: 16, marginHorizontal: 10}]}>Altura: {altura} mts</Text>
                </View>
            </View>

            <View style={styles.containerFot}>
                <Pressable style={styles.cameraButton} onPress={pickImage}>
                    <Text style={styles.text}>Cambiar foto de perfil</Text>
                </Pressable>
                <Pressable style={styles.cameraButton} onPress={confirmImage}>
                    <Text style={styles.text}>Confirmar</Text>
                </Pressable>
            </View>

            <Pressable
                style={{ ...styles.cameraButton, marginTop: 20 }}
                onPress={() => navigation.navigate('Location')}
            >
                <Text style={styles.text}>Ir a mi ubiacion</Text>
            </Pressable>
            <Pressable style={styles.buttonLogout} onPress={logout}>
                <Text style={styles.textLogout}>Logout</Text>
            </Pressable>
        </View>
    )
}

export default Profile