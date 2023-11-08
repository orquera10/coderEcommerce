import { Pressable, Text, TextInput, View, Image } from 'react-native'
import React, { useState } from 'react'
import { setUser, setProfileData, setUserTemp } from '../../../features/auth/authSlice'
import styles from './Signup.styles'
import { useDispatch } from 'react-redux'
import { useSignUpMutation } from '../../../services/authApi'
import { insertSession } from '../../../db'
import { usePostProfileDataMutation } from '../../../services/shopApi'

const Signup = ({ navigation }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [aviso, setAviso] = useState(true)

    const [triggerSignup, result] = useSignUpMutation()
    const [triggerPostProfileData, resultProfile] = usePostProfileDataMutation()
    const dispatch = useDispatch()


    const onSubmit = () => {
        if (email && password && confirmPass) {
            console.log(email, password, confirmPass)
            const data = { email: email, password: password }
            dispatch(setUserTemp(data))
            navigation.navigate('SingUpData')
        } else{
            setAviso(false)
            console.log('Completar informacion');
        }

    }
    const onHandleDelete = () => {
        setModalVisible(false)
    }
    return (
        <View style={styles.container}>
            <View style={styles.containerArriba}>
                <Image
                    source={require('../../../assets/img/logoDietikClaro.png')}
                    style={{ height: 50, margin: 3 }}
                    resizeMode='contain'
                />
                <Text style={styles.subTitle}>Planes Alimentarios</Text>
                <Text style={styles.subTitle}>potenciadas con IA</Text>
            </View>

            <View style={styles.loginContainer}>
                <Image
                    source={require('../../../assets/img/fondoAuth.png')}
                    style={{ position: 'absolute', height: '100%', opacity: 0.1 }}
                />

                <View style={styles.containerInputs}>

                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Email"
                        placeholderTextColor="#E3E9E2"
                    />
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Contraseña"
                        placeholderTextColor="#E3E9E2"
                    />
                    <TextInput
                        style={styles.input}
                        value={confirmPass}
                        onChangeText={setConfirmPass}
                        placeholder="Repetir Contraseña"
                        placeholderTextColor="#E3E9E2"
                    />
                    {aviso ? <Text></Text> : <Text style={{color:'red'}}>Completa todos los campos!</Text>}
                    <Pressable style={styles.loginButton} onPress={onSubmit}>
                        <Text style={styles.text}>Continuar</Text>
                    </Pressable>
                    <View style={styles.register}>
                        <Text style={styles.textRegister}>Ya tienes una cuenta? </Text>
                        <Pressable onPress={() => navigation.navigate('Login')}>
                            <Text style={[styles.textRegister, { fontWeight: 'bold', }]}>Inicia Sesión</Text>
                        </Pressable>
                    </View>

                </View>

            </View>

        </View>
    )
}

export default Signup