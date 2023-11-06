import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainer: {
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputEmail: {
        width: '95%',
        backgroundColor: colors.secondary,
        height: 50,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    loginButton: {
        backgroundColor: colors.primary,
        width: '95%',
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    email: {
        width: '95%',
    },
})