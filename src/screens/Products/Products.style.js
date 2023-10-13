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
  weapperStyle: {
    justifyContent: 'space-between',
  },
  productContainer: {
    width: '47%',
    backgroundColor: 'white',
    marginBottom: 20,
    alignItems: 'flex-start',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    gap: 10,
  },
  title: {
    fontFamily: 'ABeeZee',
    fontWeight: '700',
    fontVariant: 'small-caps',
  },
  price: {
    fontFamily: 'ABeeZee',
    fontSize: 20,
    fontVariant: '',
  },
  image: {
    alignSelf: 'center',
    height: 150,
    width: 150,
  },
})