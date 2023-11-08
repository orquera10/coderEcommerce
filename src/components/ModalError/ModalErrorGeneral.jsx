import { Button, Modal as NewModal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './ModalErrorGeneral.style'
import { Pressable } from 'react-native';

const ModalErrorGeneral = ({ modalVisible, setModalVisible }) => {
    
    return (
        <NewModal visible={modalVisible} animationType="slide" transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View >
                        <Text style={styles.modalTitleText}>Completado</Text>
                    </View>
                    <View style={styles.modalMessage}>
                        <Text style={styles.modalMessageText}>Alimento agregado exitosamente!</Text>
                    </View>

                    <View style={styles.modalButton}>
                        <Pressable style={[styles.button, {backgroundColor:'#44693D'}]} onPress={() => setModalVisible(false)}>
                            <Text style={[styles.text,{color:'#E3E9E2'} ]}>Aceptar</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </NewModal>
    )
}

export default ModalErrorGeneral