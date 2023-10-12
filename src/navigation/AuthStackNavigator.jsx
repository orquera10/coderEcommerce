import { Login, Signup } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AuthStack = createNativeStackNavigator()

function AuthStackNavigator() {
    return (
        <AuthStack.Navigator initialRouteName="Login" screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
        }}>
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Signup" component={Signup} />
        </AuthStack.Navigator>
    )
}

export default AuthStackNavigator