import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    containerFlat:{
        width: '100%',
        height: '80%',
        backgroundColor: colors.secondary,
        marginVertical: 20
    }
})