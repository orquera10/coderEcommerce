import { Button, Modal as NewModal, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ModalError = ({ modalVisible, onHandleDelete, setModalVisible, errorSingUp }) => {
    console.log(errorSingUp);
    return (
        <NewModal visible={modalVisible} animationType="slide" transparent={true}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View>
                        <Text style={styles.modalTitleText}>Error</Text>
                    </View>
                    <View style={styles.modalMessage}>
                        {errorSingUp==='EMAIL_EXISTS' ? <Text style={styles.modalMessageText}>El Email ya esta registrado</Text> : <Text style={styles.modalMessageText}>La contraseña tiene que ser de 6 caracteres</Text> }
                    </View>
                    <View style={styles.modalButton}>
                        <View style={styles.button}>
                            <Button title="Cancelar" onPress={() => setModalVisible(false)} color={'#1f487e'} />
                        </View>
                        <View style={styles.button}>
                            <Button title="Confirmar" onPress={onHandleDelete} color={'#fe6755'} />
                        </View>
                    </View>
                </View>
            </View>
        </NewModal>
    )
}

export default ModalError

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#000',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    modalTitleText: {
        color: '#fe6755',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    modalMessage: {
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalMessageText: {
        color: '#fbfbfb',
        fontWeight: 'bold'
    },
    modalButton: {
        marginTop: 5,
        flexDirection: 'row',
    },
    button: {
        margin: 10,
    },
});