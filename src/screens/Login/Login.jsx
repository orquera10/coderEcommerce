import { Pressable, Text, TextInput, View, Image } from 'react-native'
import React, { useState } from 'react'

import { insertSession } from '../../db'
import { setUser } from '../../features/auth/authSlice'
import styles from './login.styles'
import { useDispatch } from 'react-redux'
import { useLoginMutation } from '../../services/authApi'

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [triggerLogin, result] = useLoginMutation()
    const dispatch = useDispatch()

    const onSubmit = () => {
        //console.log(email, password)
        triggerLogin({
            email,
            password,
        })
            .unwrap()
            .then(result => {
                dispatch(setUser(result))
                insertSession({
                    localId: result.localId,
                    email: result.email,
                    token: result.idToken,
                })
                    .then(result => console.log(result))
                    .catch(error => console.log(error.message))
            })
        //console.log(result)
        // if (result.isSuccess) {
        //     dispatch(setUser(result.data))
        //     insertSession({
        //         localId: result.data.localId,
        //         email: result.data.email,
        //         token: result.data.idToken,
        //     })
        //         .then(result => console.log(result))
        //         .catch(error => console.log(error.message))
        // }
    }

    return (
        <View style={styles.container}>
            <View >
                <Image
                    source={require('../../../src/assets/img/logoDietik.png')}
                    style={{ width: 300, height: 200, }}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.loginContainer}>
                <Text style={{ fontSize: 20 }}>Ingresar</Text>
                <TextInput
                    style={styles.inputEmail}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.inputEmail}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Contraseña"
                />
                <Pressable style={styles.loginButton} onPress={onSubmit}>
                    <Text style={{ color: 'white', fontSize: 20, fontFamily: 'ABeeZee', }}>Inicia Sesión</Text>
                </Pressable>
                <Text style={{ fontSize: 20 }}>No tienes una cuenta?</Text>
                <Pressable
                    style={styles.loginButton}
                    onPress={() => navigation.navigate('Signup')}
                >
                    <Text style={{ color: 'white', fontSize: 20, fontFamily: 'ABeeZee', }}>Registrate</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Login