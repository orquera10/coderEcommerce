import { Pressable, SafeAreaView, Text, TextInput, ScrollView, Keyboard, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import styles from './ChatGPT.style'
import { Header } from '../../components'
import AntDesign from '@expo/vector-icons/AntDesign'
import { apiGPT } from '../../firebase'

const mensajes = [{ role: 'system', content: 'Eres un asistente, que da respuestas simples' }]

const ChatGPTScreen = ({ navigation }) => {
    const [value, setValue] = useState('')
    const [respuesta, setRespuesta] = useState('')
    const [loading, setLoading] = useState(false);
    
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
            <Text>Pantalla de chat</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={text => setValue(text)}
                placeholder="Buscar comida"
            />
            <Pressable onPress={search}>
                <AntDesign name="search1" size={25} color={'black'} />
            </Pressable>
            <Pressable onPress={clearInput}>
                <AntDesign name="closecircleo" size={25} color={'black'} />
            </Pressable>
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            {respuesta && <ScrollView><Text>{respuesta}</Text></ScrollView>}
        </SafeAreaView>
    )
}

export default ChatGPTScreen