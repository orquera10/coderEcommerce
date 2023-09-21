import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    padding: 15,
  },
  input: {
    backgroundColor: colors.quaternary,
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.quaternary,
    width: '80%',
    fontSize: 20,
  },
})