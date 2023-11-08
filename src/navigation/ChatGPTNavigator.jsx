import { ChatGPT } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function ChatGPTNavigator() {
    return (
        <Stack.Navigator
            initialRouteName="ChatGPT"
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <Stack.Screen name="ChatGPTScreen" component={ChatGPT} />
        </Stack.Navigator>
    )
}

export default ChatGPTNavigator