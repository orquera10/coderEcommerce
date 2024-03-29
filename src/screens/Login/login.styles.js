import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerArriba: {
        flex: 1,
        backgroundColor: colors.secondary,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subTitle: {
        color: colors.primary,
        fontSize: 18,
    },
    loginContainer: {
        flex: 2,
        backgroundColor: colors.primary,
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    containerInputs:{
        marginVertical: 50,
        width: '100%',
        alignItems: 'center',
    },
    input: {
        width: '95%',
        backgroundColor: colors.secondary,
        height: 30,
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 10,
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.primary
    },
    loginButton: {
        borderColor: colors.secondary,
        borderWidth: 2,
        width: '95%',
        height: 45,
        borderRadius: 10,
        marginTop: 25,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    register: {
        flexDirection: 'row'
    },
    text: {
        color: colors.secondary,
        fontSize: 20,
        fontFamily: 'ABeeZee',
    },
    textRegister: {
        color: colors.secondary,
        fontSize: 17,
    }
})