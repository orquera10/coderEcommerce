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
            <View style={styles.containerArriba}>
                <Image
                    source={require('../../../src/assets/img/logoDietik.png')}
                    style={{ height: 50, margin: 3 }}
                    resizeMode='contain'
                />
                <Text style={styles.subTitle}>Planes Alimentarios</Text>
                <Text style={styles.subTitle}>potenciadas con IA</Text>
            </View>

            <View style={styles.loginContainer}>
                <Image
                    source={require('../../../src/assets/img/fondoAuth.png')}
                    style={{ position: 'absolute', height: '100%', opacity: 0.1 }}
                />
                <View style={styles.containerInputs}>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Email"
                        placeholderTextColor="#44693D"
                    />
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Contraseña"
                        placeholderTextColor="#44693D"
                    />
                    <Pressable style={styles.loginButton} onPress={onSubmit}>
                        <Text style={styles.text}>Inicia Sesión</Text>
                    </Pressable>

                    <View style={styles.register}>
                        <Text style={styles.textRegister}>No tienes una cuenta? </Text>
                        <Pressable onPress={() => navigation.navigate('Signup')}>
                            <Text style={[styles.textRegister, { fontWeight: 'bold' }]}>Registrate</Text>
                        </Pressable>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default Login