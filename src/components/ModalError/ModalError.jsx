import { Button, Modal as NewModal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './ModalError.style'
import { Pressable } from 'react-native';

const ModalError = ({ modalVisible, onHandleDelete, setModalVisible, errorSingUp }) => {
    console.log(errorSingUp);
    return (
        <NewModal visible={modalVisible} animationType="slide" transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View >
                        <Text style={styles.modalTitleText}>Error</Text>
                    </View>
                    <View style={styles.modalMessage}>
                        {errorSingUp === 'EMAIL_EXISTS' ? <Text style={styles.modalMessageText}>El Email ya esta registrado</Text> : <Text style={styles.modalMessageText}>La contraseña tiene que ser de 6 caracteres</Text>}
                    </View>
                    <Text style={styles.modalMessageText}>Ir a la pantalla de registro?</Text>

                    <View style={styles.modalButton}>
                        <Pressable style={styles.button} onPress={() => setModalVisible(false)}>
                            <Text style={styles.text}>Salir</Text>
                        </Pressable>
                        <Pressable style={[styles.button, {backgroundColor:'#44693D'}]} onPress={onHandleDelete}>
                            <Text style={[styles.text,{color:'#E3E9E2'} ]}>Continuar</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </NewModal>
    )
}

export default ModalError