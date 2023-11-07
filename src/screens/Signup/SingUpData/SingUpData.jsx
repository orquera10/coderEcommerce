import { Pressable, Text, TextInput, View, Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput as Input } from 'react-native-paper'
import { setUser, setProfileData } from '../../../features/auth/authSlice'
import styles from './SingUpData.styles'
import { useDispatch, useSelector } from 'react-redux'
import { useSignUpMutation } from '../../../services/authApi'
import { insertSession } from '../../../db'
import { usePostProfileDataMutation } from '../../../services/shopApi'
import { ModalError } from '../../../components'

const SingUpData = ({ navigation }) => {
    
    const [nombre, setNombre] = useState('')
    const [pais, setPais] = useState('')

    const [triggerSignup, result] = useSignUpMutation()
    const dispatch = useDispatch()
    const [triggerPostProfileData, resultProfile] = usePostProfileDataMutation()
    const [modalVisible, setModalVisible] = useState(false)
    const  user = useSelector(state => state.auth.email)
    const  password = useSelector(state => state.auth.password)

    const [errorSingup, setErrorSingup] = useState('')

    const onSubmit = () => {
        console.log(email, password)
        triggerSignup({
            email,
            password,
        })
            .unwrap()
            .then(result => {
                console.log(result)
                dispatch(setUser(result))
                insertSession({
                    localId: result.localId,
                    email: result.email,
                    token: result.idToken,
                })

                const localId = result.localId
                const datosUser = {
                    localId: localId,
                    nombre: nombre,
                    pais: pais,
                }
                console.log(datosUser);
                dispatch(setProfileData(datosUser))
                triggerPostProfileData(datosUser)
                    .unwrap()
                    .then(result => console.log(result))
            })
            .catch(err => {
                setErrorSingup(err.data.error.message)
                console.log(errorSingup);
                setModalVisible(true)
            })
        // console.log(result)
        // if (result.isSuccess) {
        //     dispatch(setUser(result.data))
        // }
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
                    <Text style={[styles.text,{marginBottom:20,fontSize:17}]}>Queremos conocerte un poco más!</Text>
                    {/*  <Input mode="flat" label="Email" style={styles.email} /> */}
                    {/* <TextInput
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
                    /> */}
                    <TextInput
                        style={styles.input}
                        value={nombre}
                        onChangeText={setNombre}
                        placeholder="Cómo te llamas?"
                        placeholderTextColor="#E3E9E2"
                    />
                    <TextInput
                        style={styles.input}
                        value={pais}
                        onChangeText={setPais}
                        placeholder="De que país sos?"
                        placeholderTextColor="#E3E9E2"
                    />
                    <View style={styles.group}>
                        <TextInput
                            style={[styles.input,{width:'48%'}]}
                            value={nombre}
                            onChangeText={setNombre}
                            placeholder="Cuantó pesas?(Kg)"
                            placeholderTextColor="#E3E9E2"
                        />
                        <TextInput
                            style={[styles.input,{width:'48%'}]}
                            value={pais}
                            onChangeText={setPais}
                            placeholder="Cuantó medis?(mts)"
                            placeholderTextColor="#E3E9E2"
                        />
                    </View>
                    <View style={styles.group}>
                        <TextInput
                            style={[styles.input,{width:'48%'}]}
                            value={nombre}
                            onChangeText={setNombre}
                            placeholder="Edad?"
                            placeholderTextColor="#E3E9E2"
                        />
                        <TextInput
                            style={[styles.input,{width:'48%'}]}
                            value={pais}
                            onChangeText={setPais}
                            placeholder="Sexo?"
                            placeholderTextColor="#E3E9E2"
                        />
                    </View>
                    <TextInput
                        style={[styles.input,{marginBottom:2}]}
                        value={pais}
                        onChangeText={setPais}
                        placeholder="Tenes alguna afección alimentaria?"
                        placeholderTextColor="#E3E9E2"
                    />
                    <Text style={[styles.text,{fontSize: 15}]}>(Enfermedades, alergias, ...)</Text>

                    <Pressable style={styles.loginButton}
                        // onPress={onSubmit}
                        onPress={() => navigation.navigate('SingUpPrivacidad')}
                    >
                        <Text style={styles.text}>Continuar</Text>
                    </Pressable>
                    <View style={styles.register}>
                        <Text style={styles.textRegister}>Ya tienes una cuenta? </Text>
                        <Pressable

                            onPress={() => navigation.navigate('Login')}
                        >
                            <Text style={[styles.textRegister, { fontWeight: 'bold', }]}>Inicia Sesión</Text>
                        </Pressable>
                    </View>
                    <Text>user{user}</Text>
                    <Text>pass{password}</Text>
                </View>
                
            </View>
            
            </View>
    )
}

export default SingUpData