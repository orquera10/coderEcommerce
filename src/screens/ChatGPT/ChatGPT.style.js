import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        padding: 20,
        alignItems: 'center'
    },
    input:{
        backgroundColor: colors.secondary,
        borderRadius: 5,
        width: '65%',
        height: 40,
        marginVertical: 30,
        fontSize: 15,
        paddingHorizontal: 10,
        color: colors.primary
    },
    barraBus:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerAbajo:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contenedorRes:{
        width: '90%',
        height: '70%',
        padding: 15,
        borderColor: colors.secondary,
        borderWidth: 3,
        borderRadius: 15
    },
    textoGpt:{
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 40
    }
})