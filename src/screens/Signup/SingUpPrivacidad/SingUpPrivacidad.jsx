import { Pressable, Text, TextInput, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { TextInput as Input } from 'react-native-paper'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { setUser, setProfileData } from '../../../features/auth/authSlice'
import styles from './SingUpPrivacidad.style'
import { useDispatch } from 'react-redux'
import { useSignUpMutation } from '../../../services/authApi'
import { insertSession } from '../../../db'
import { usePostProfileDataMutation } from '../../../services/shopApi'
import { ModalError } from '../../../components'


const SingUpPrivacidad = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [nombre, setNombre] = useState('')
    const [pais, setPais] = useState('')
    const [isChecked, setChecked] = useState(false);

    const [triggerSignup, result] = useSignUpMutation()
    const dispatch = useDispatch()
    const [triggerPostProfileData, resultProfile] = usePostProfileDataMutation()
    const [modalVisible, setModalVisible] = useState(false)

    const [errorSingup, setErrorSingup] = useState('')

    const onSubmit = () => {
        console.log(email, password, confirmPass)
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
                    <Text style={[styles.text, { marginBottom: 20, fontSize: 17, fontWeight: 'bold' }]}>Términos y condiciones de Uso</Text>
                    <ScrollView style={styles.scroll}><Text style={styles.textScroll}>Bienvenido a Dietik ("la Aplicación"). Antes de utilizar nuestra aplicación, te pedimos que leas detenidamente los siguientes términos y condiciones de uso ("Términos") que rigen tu acceso y uso de nuestra aplicación.
                        {'\n'}
                        {'\n'}1. Aceptación de los Términos
                        Al acceder y utilizar la Aplicación, aceptas cumplir y estar sujeto a estos Términos y cualquier otro documento incorporado por referencia. Si no estás de acuerdo con estos Términos, por favor, no utilices la Aplicación.
                        {'\n'}
                        {'\n'}2. Uso de la Aplicación
                        {'\n'}2.1 Propósito de la Aplicación: La Aplicación proporciona consejos alimenticios y dietas generadas por medio de tecnologías desarrolladas por OpenAI. Estos consejos son generales y no deben sustituir el consejo de un profesional de la salud o un nutricionista.
                        {'\n'}2.2 No Sustitución de Asesoramiento Profesional: La información proporcionada por la Aplicación no constituye asesoramiento médico, nutricional ni profesional. Siempre se recomienda consultar a un profesional de la salud o un nutricionista antes de realizar cambios significativos en tu dieta.
                        {'\n'}2.3 Uso Responsable: Debes utilizar la Aplicación de manera responsable y no debes abusar de la misma. No deberás utilizar la Aplicación para propósitos ilegales o no autorizados.
                        {'\n'}
                        {'\n'}3. Propiedad Intelectual
                        {'\n'}3.1 Derechos de Autor: La Aplicación y todo su contenido, incluidos textos, gráficos, logotipos, iconos y cualquier otro material, están protegidos por derechos de autor y otras leyes de propiedad intelectual.
                        {'\n'}3.2 Licencia de Uso: Se otorga una licencia limitada, no exclusiva y no transferible para utilizar la Aplicación de acuerdo con estos Términos. No se otorga ninguna licencia para modificar, reproducir, distribuir o crear obras derivadas basadas en la Aplicación.
                        {'\n'}
                        {'\n'}4. Privacidad
                        {'\n'}4.1 Política de Privacidad: Entiendes y aceptas que al utilizar la Aplicación, estarás sujeto a nuestra Política de Privacidad, que detalla cómo recopilamos, usamos y protegemos tu información.
                        {'\n'}
                        {'\n'}5. Limitaciones de Responsabilidad
                        {'\n'}5.1 Exclusión de Garantías: La Aplicación se proporciona "tal cual" y sin garantías de ningún tipo, expresas o implícitas.
                        {'\n'}5.2 Limitación de Responsabilidad: En ningún caso seremos responsables por daños directos, indirectos, incidentales, especiales o consecuentes que surjan del uso de la Aplicación.
                        {'\n'}
                        {'\n'}6. Modificaciones y Terminación
                        Nos reservamos el derecho de modificar o terminar la Aplicación o estos Términos en cualquier momento sin previo aviso.
                        {'\n'}
                        {'\n'}7. Disposiciones Generales
                        Estos Términos constituyen el acuerdo completo entre tú y nosotros con respecto a la Aplicación. Si alguna disposición de estos Términos es considerada inválida o inaplicable, dicha disposición será interpretada de manera consistente con la ley aplicable y las demás disposiciones permanecerán en pleno vigor y efecto.
                        {'\n'}
                        {'\n'}8. Contacto
                        Si tienes preguntas o comentarios sobre estos Términos, por favor contáctanos a dietik@soport.com.</Text></ScrollView>
                    <View style={{flexDirection:'row', alignItems:'center', marginTop:15}}>
                        <BouncyCheckbox
                            isChecked={isChecked}
                            onPress={() => setChecked(!isChecked)}
                            fillColor='#44693D'
                        />
                        <Text style={[styles.text,{fontSize:15, marginStart:7}]}>Acepto términos y condiciones</Text>
                    </View>


                    <Pressable style={styles.loginButton}
                        // onPress={onSubmit}
                        onPress={() => navigation.navigate('SingUpPrivacidad')}
                    >
                        <Text style={styles.text}>Registrarse</Text>
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
            <ModalError modalVisible={modalVisible} onHandleDelete={onHandleDelete} setModalVisible={setModalVisible} errorSingUp={errorSingup} />
        </View>
    )
}

export default SingUpPrivacidad