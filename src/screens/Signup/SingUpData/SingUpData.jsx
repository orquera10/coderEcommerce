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

    const [nombre, setNombre] = useState('')
    const [pais, setPais] = useState('')
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [edad, setEdad] = useState('')
    const [sexo, setSexo] = useState('')
    const [afeccion, setAfeccion] = useState('')

    const [triggerSignup, result] = useSignUpMutation()
    const dispatch = useDispatch()
    const [triggerPostProfileData, resultProfile] = usePostProfileDataMutation()
    const [modalVisible, setModalVisible] = useState(false)
    const [aviso, setAviso] = useState(true)


    const onSubmit = () => {
        if (nombre && pais && peso && altura && edad && sexo && afeccion) {
            const data = {
                nombre: nombre,
                pais: pais,
                peso: peso,
                altura: altura,
                edad: edad,
                sexo: sexo,
                afeccion: afeccion
            }
            dispatch(setProfileData(data))
            navigation.navigate('SingUpPrivacidad')
        } else {
            console.log('completar campos');
            setAviso(false)
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
                    <Text style={[styles.text, { marginBottom: 20, fontSize: 17 }]}>Queremos conocerte un poco más!</Text>

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
                            style={[styles.input, { width: '48%' }]}
                            value={peso}
                            onChangeText={setPeso}
                            placeholder="Cuantó pesas?(Kg)"
                            placeholderTextColor="#E3E9E2"
                        />
                        <TextInput
                            style={[styles.input, { width: '48%' }]}
                            value={altura}
                            onChangeText={setAltura}
                            placeholder="Cuantó medis?(mts)"
                            placeholderTextColor="#E3E9E2"
                        />
                    </View>
                    <View style={styles.group}>
                        <TextInput
                            style={[styles.input, { width: '48%' }]}
                            value={edad}
                            onChangeText={setEdad}
                            placeholder="Edad?"
                            placeholderTextColor="#E3E9E2"
                        />
                        <TextInput
                            style={[styles.input, { width: '48%' }]}
                            value={sexo}
                            onChangeText={setSexo}
                            placeholder="Sexo?"
                            placeholderTextColor="#E3E9E2"
                        />
                    </View>
                    <TextInput
                        style={[styles.input, { marginBottom: 2 }]}
                        value={afeccion}
                        onChangeText={setAfeccion}
                        placeholder="Tenes alguna afección alimentaria?"
                        placeholderTextColor="#E3E9E2"
                    />
                    <Text style={[styles.text, { fontSize: 15 }]}>(Enfermedades, alergias, ...)</Text>
                    {aviso ? <Text></Text> : <Text style={{ color: 'red' }}>Completa todos los campos!</Text>}
                    <Pressable style={styles.loginButton} onPress={onSubmit}>
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
                </View>
            </View>
        </View>
    )
}

export default SingUpData