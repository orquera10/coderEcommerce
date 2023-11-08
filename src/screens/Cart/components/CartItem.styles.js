import { StyleSheet } from 'react-native'
import { colors } from '../../../constants/colors'

export default styles = StyleSheet.create({
    container: {
        margin: 15,
        padding: 8,
        borderRadius: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        height: 100
    },
    name: {
        fontSize: 20,
        marginHorizontal: 20,
        minWidth: 150,
        color: colors.primary,
        fontWeight: 'bold'
    },
    image: {
        width: 70,
        height: 70,
        marginStart: 10
    },
    details: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginEnd: 10
    },
})