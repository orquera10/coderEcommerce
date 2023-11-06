import { Pressable, Text, TextInput, View, Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput as Input } from 'react-native-paper'
import { setUser, setProfileData } from '../../../features/auth/authSlice'
import styles from './SingUpData.styles'
import { useDispatch } from 'react-redux'
import { useSignUpMutation } from '../../../services/authApi'
import { insertSession } from '../../../db'
import { usePostProfileDataMutation } from '../../../services/shopApi'
import { ModalError } from '../../../components'

const SingUpData = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [confirmPass, setConfirmPass] = useState('')
    const [nombre, setNombre] = useState('')
    const [pais, setPais] = useState('')

    const [triggerSignup, result] = useSignUpMutation()
    const dispatch = useDispatch()
    const [triggerPostProfileData, resultProfile] = usePostProfileDataMutation()
    const [modalVisible, setModalVisible] = useState(false)

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
            <View >
                <Image
                    source={require('../../../assets/img/logoDietik.png')}
                    style={{ width: 300, height: 200, }}
                    resizeMode='contain'
                />
            </View>
            <View style={styles.loginContainer}>
                <Text style={{ fontSize: 20 }}>Queremos conocerte un poco más!</Text>
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
                {/* <TextInput
                    style={styles.inputEmail}
                    value={confirmPass}
                    onChangeText={setConfirmPass}
                    placeholder="Repetir Contraseña"
                /> */}
                <TextInput
                    style={styles.inputEmail}
                    value={nombre}
                    onChangeText={setNombre}
                    placeholder="Cómo te llamas?"
                />
                <TextInput
                    style={styles.inputEmail}
                    value={pais}
                    onChangeText={setPais}
                    placeholder="De que país sos?"
                />
                <Pressable style={styles.loginButton}
                    // onPress={onSubmit}
                    onPress={() => navigation.navigate('SingUpPrivacidad')}
                >
                    <Text style={{ color: 'white', fontSize: 20, fontFamily: 'ABeeZee', }}>Registrate</Text>
                </Pressable>
                <Text style={{ fontSize: 20 }}>Ya tienes una cuenta?</Text>
                <Pressable
                    style={styles.loginButton}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={{ color: 'white', fontSize: 20, fontFamily: 'ABeeZee', }}>inicia Sesión</Text>
                </Pressable>
            </View>
            <ModalError modalVisible={modalVisible} onHandleDelete={onHandleDelete} setModalVisible={setModalVisible} errorSingUp={errorSingup} />
        </View>
    )
}

export default SingUpData