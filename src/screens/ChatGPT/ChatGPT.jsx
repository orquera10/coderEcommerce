import { Pressable, SafeAreaView, Text, TextInput, ScrollView, Keyboard, ActivityIndicator, View } from 'react-native'
import React, { useState } from 'react'
import styles from './ChatGPT.style'
import { Header } from '../../components'
import AntDesign from '@expo/vector-icons/AntDesign'
import { apiGPT } from '../../firebase'
import { colors } from '../../constants/colors'



const ChatGPTScreen = ({ navigation }) => {
    const [value, setValue] = useState('')
    const [respuesta, setRespuesta] = useState('')
    const [loading, setLoading] = useState(false);
    const mensajes = [{ role: 'system', content: 'Eres un asistente, que se limita a nutricion, salud y alimentacion. Si te preguntan de otro tema responde que no podes brindar esa respuesta' }]

    const search = async () => {
        setLoading(true);
        mensajes.push({ role: 'user', content: value });
        console.log(mensajes);


        const response = await fetch(`https://api.openai.com/v1/chat/completions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiGPT}`, // Reemplaza con tu API key
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: mensajes,
            })
        })
        const data = await response.json();
        setRespuesta(data.choices[0].message.content);

        mensajes.push({ role: 'assistant', content: data.choices[0].message.content });


        console.log(data.choices[0].message.content);
        console.log(mensajes);
        Keyboard.dismiss();
        clearInput();
        setLoading(false);
    }


    const clearInput = () => {
        setValue('')
        // onSearch('')
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header title={'ChatGPT'} />
            <View style={styles.barraBus}>
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={text => setValue(text)}
                    placeholder="Realiza tus consultas alimentarias"
                    placeholderTextColor={colors.primary}
                />
                <Pressable onPress={search}>
                    <AntDesign name="search1" size={30} color={colors.secondary} style={{ marginHorizontal: 5, marginStart: 10 }} />
                </Pressable>
                <Pressable onPress={clearInput}>
                    <AntDesign name="closecircleo" size={30} color={colors.secondary} style={{ marginHorizontal: 5 }} />
                </Pressable>
            </View>

            <View style={styles.containerAbajo}>
                {loading && <ActivityIndicator size="large" color={colors.secondary} />}
                {respuesta && <ScrollView style={styles.contenedorRes}><Text style={styles.textoGpt}>{respuesta}</Text></ScrollView>}
            </View>

        </SafeAreaView>
    )
}

export default ChatGPTScreen