import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: colors.secondary,
        width: '91%',
        height: '42%',
        borderRadius: 15,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.quaternary,
        borderWidth: 4,
    },
    modalTitleText: {
        color: colors.quaternary,
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: 'ABeeZee',
        marginBottom: 40
    },
    modalMessage: {
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalMessageText: {
        color: colors.primary,
        fontWeight: 'bold',
        fontFamily: 'ABeeZee',
        fontSize: 15,
        marginVertical: -5
    },
    modalButton:{
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },
    button: {
        borderColor: colors.primary,
        borderWidth: 2,
        width: '45%',
        height: 45,
        borderRadius: 10,
        marginTop: 25,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.primary,
        fontSize: 20,
        fontFamily: 'ABeeZee',
    },
});