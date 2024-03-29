import { StyleSheet } from 'react-native'
import { colors } from '../../../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    marginVertical: 15,
    height: 100,
    borderRadius: 20,
    justifyContent: 'center',
  },
  contentContainer: {
    paddingLeft: 20,
  },
  text: {
    fontFamily: 'ABeeZee',
    fontSize: 17,
    color: colors.primary,
    fontWeight: 'bold'
  },
})