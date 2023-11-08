import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    containerFood:{
        alignItems: 'center',
        justifyContent:'center',
        borderWidth: 2,
        borderColor:colors.secondary,
        borderRadius: 15,
        marginVertical: 8,
        marginHorizontal: 30,
        paddingHorizontal: 30,
        paddingVertical: 5,
    },
    textFood:{
        fontSize: 17,
        fontFamily: 'ABeeZee',
        color: colors.secondary,
        marginTop: 5,
        fontWeight: 'bold'
    },
    picker:{
        width: '70%',
        color: colors.secondary,
        
    },
    listContainer: {
        height: '52%'
    },
    buttonContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    containerCalorias:{
        borderWidth: 2,
        borderColor: colors.secondary,
        borderRadius: 10,
        paddingHorizontal: 50,
        paddingVertical: 10,
        marginBottom: 10
    },
    textCalorias:{
        color:colors.secondary,
        fontFamily: 'ABeeZee',
        fontSize: 30,
        fontWeight: '700'
    },
    cameraButton: {
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 15,
        height: 50,
        width: '90%',
        alignItems:'center',
        marginVertical: 10,
        fontFamily: 'ABeeZee',
        justifyContent: 'center',
    },
    text:{
        fontSize: 17,
        fontFamily: 'ABeeZee',
        color: colors.primary,
        fontWeight: 'bold',
    }
})