import { StyleSheet } from 'react-native'
import { colors } from '../../../../constants/colors'


export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        marginVertical: 10,
        marginHorizontal: 25,
        borderRadius: 15,
        padding: 15,
        
    },
    contTitulo:{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:'center',
    },
    image: {
        alignSelf: 'center',
        height: 120,
        width: 120,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 10
    },
    text1: {
        color: colors.primary,
        fontWeight: 'bold',
        fontFamily: 'ABeeZee',
    },
    text2: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontFamily: 'ABeeZee',
    },
    containerFlat:{
        backgroundColor: colors.secondary,
        marginVertical: 15
        
    },
    tarjetaItem:{
        backgroundColor: colors.primary,
        width: 130,
        padding: 10,
        borderRadius: 10,
        marginHorizontal: 10
    }
})