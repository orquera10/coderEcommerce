import { StyleSheet } from 'react-native'
import { colors } from '../../constants/colors'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 20,
    alignItems: 'center'
  },
  image: {
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 30,
    marginVertical: 20,
    fontFamily: 'ABeeZee',
    color: '#ffffff'
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#ffffff',
    fontFamily: 'SansitaRegular',
  },
  description: {
    fontSize: 20,
    marginVertical: 4,
    color: colors.tertiary,
    fontFamily: 'SansitaRegular',
  },
  containerImg: {
    height: '50%',
    width: '90%', 
    borderWidth: 2, // Ancho del borde
    borderColor: 'white',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginTop: 20
  },
})
