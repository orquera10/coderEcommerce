import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  listContainer: {
    paddingHorizontal: 15,
    flex: 1,
    marginTop: 15,
  },
  cardProduct: {
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  textCard: {
    fontFamily: 'ABeeZee',
    fontSize: 17,
  },
})


// import { StyleSheet } from 'react-native'
// import { colors } from '../../../../constants/colors'

// export default styles = StyleSheet.create({
//   cardProduct: {
//     backgroundColor: '#FFFFFF',
//     marginVertical: 15,
//     height: 100,
//     borderRadius: 20,
//     justifyContent: 'center',
//   },
//   contentContainer: {
//     paddingLeft: 20,
//   },
//   text: {
//     fontFamily: 'ABeeZee',
//     fontSize: 17,
//   },
// })