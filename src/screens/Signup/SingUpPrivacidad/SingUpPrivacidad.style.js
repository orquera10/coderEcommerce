import { StyleSheet } from 'react-native'
import { colors } from '../../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerArriba: {
        flex: 1,
        backgroundColor: colors.primary,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subTitle: {
        color: colors.secondary,
        fontSize: 18,
    },
    loginContainer: {
        flex: 2,
        backgroundColor: colors.secondary,
        width: '100%',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    containerInputs:{
        marginVertical: 20,
        width: '100%',
        alignItems: 'center',
    },
    input: {
        width: '95%',
        backgroundColor: colors.primary,
        height: 30,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 10,
        fontSize: 17,
        fontWeight: 'bold',
        color: colors.secondary
    },
    loginButton: {
        borderColor: colors.primary,
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
        flexDirection: 'row',
        alignItems:'center',
    },
    text: {
        color: colors.primary,
        fontSize: 20,
        fontFamily: 'ABeeZee',
    },
    textRegister: {
        color: colors.primary,
        fontSize: 17,
    },
    group:{
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    scroll:{
        backgroundColor: colors.primary,
        height: '60%',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    textScroll:{
        color: colors.secondary,
        fontFamily: 'ABeeZee',
        textAlign: 'justify',
        paddingVertical: 15
    }
})