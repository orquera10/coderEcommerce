import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 30,
        margin: 50,
    },
    containerFot:{
        alignItems: 'center',
        width: '100%',
    },
    cameraButton: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 15,
        height: 50,
        width: '90%',
        alignItems:'center',
        marginVertical: 10,
        fontFamily: 'ABeeZee',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: colors.secondary
    },
    text:{
        fontSize: 17,
        fontFamily: 'ABeeZee',
        color:colors.secondary,
    },
    buttonLogout: {
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
    textLogout:{
        fontSize: 17,
        fontFamily: 'ABeeZee',
    }
    
})