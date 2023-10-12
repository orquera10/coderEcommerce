import { Pressable, Text, TextInput, View, Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput as Input } from 'react-native-paper'
import { setUser } from '../../features/auth/authSlice'
import styles from './Signup.styles'
import { useDispatch } from 'react-redux'
import { useSignUpMutation } from '../../services/authApi'

const Signup = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [triggerSignup, result] = useSignUpMutation()
    const dispatch = useDispatch()

    const onSubmit = () => {
        console.log(email, password, confirmPass)
        triggerSignup({
            email,
            password,
        })
        console.log(result)
        if (result.isSuccess) {
            dispatch(setUser(result.data))
        }
    }

    return (
        <View style={styles.container}>
            <View >
                <Image
                    source={require('../../../src/assets/img/logoDietik.png')} 
                    style={{ width: 300, height: 200,  }} 
                    resizeMode='contain'
                />
            </View>
            <View style={styles.loginContainer}>
                <Text style={{fontSize: 20}}>Registrate para ingresar</Text>
                {/*  <Input mode="flat" label="Email" style={styles.email} /> */}
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
                <TextInput
                    style={styles.inputEmail}
                    value={confirmPass}
                    onChangeText={setConfirmPass}
                    placeholder="Repetir Contraseña"
                />
                <Pressable style={styles.loginButton} onPress={onSubmit}>
                    <Text style={{ color: 'white', fontSize:20, fontFamily: 'ABeeZee',  }}>Registrate</Text>
                </Pressable>
                <Text style={{fontSize: 20}}>Ya tienes una cuenta?</Text>
                <Pressable
                    style={styles.loginButton}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={{ color: 'white', fontSize:20, fontFamily: 'ABeeZee', }}>inicia Sesión</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Signup