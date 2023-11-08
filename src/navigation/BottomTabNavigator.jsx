import { StyleSheet, View } from 'react-native'
import CartNavigator from './CartNavigator'
import Feather from '@expo/vector-icons/Feather'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import OrdersNavigator from './OrdersNavigator'
import StackNavigator from './StackNavigator'
import { colors } from '../constants/colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfileNavigator from './ProfileNavigator'
import ChatGPTNavigator from './ChatGPTNavigator'
import { Ionicons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator()

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator
            initialRouteName="Shop"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                
            }}
        >
            <BottomTab.Screen
                name="Shop"
                component={StackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={focused ? styles.iconContainer : null}>
                            <MaterialCommunityIcons name="food-apple" size={24} color={focused ? colors.secondary : colors.primary} />
                            {/* <Feather name="shopping-bag" size={24} color={colors.white} /> */}
                        </View>
                    ),
                }}
            />
            <BottomTab.Screen
                name="CartNav"
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={focused ? styles.iconContainer : null}>
                            <MaterialCommunityIcons name="food-variant" size={24} color={focused ? colors.secondary : colors.primary} />
                            {/* <Feather name="shopping-cart" size={24} color={colors.white} /> */}
                        </View>
                    ),
                }}
            />
            <BottomTab.Screen
                name="ChatGPT"
                component={ChatGPTNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={focused ? styles.iconContainer : null}>
                            <Ionicons name="chatbubble" size={24} color={focused ? colors.secondary : colors.primary} />
                            {/* <Feather name="user" size={24} color={colors.white} /> */}
                        </View>
                    ),
                }}
            />
            <BottomTab.Screen
                name="OrdersNav"
                component={OrdersNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={focused ? styles.iconContainer : null}>
                            <FontAwesome5 name="tasks" size={24} color={focused ? colors.secondary : colors.primary} />
                            {/* <Feather name="list" size={24} color={colors.white} /> */}
                        </View>
                    ),
                }}
            />
            <BottomTab.Screen
                name="ProfileNav"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={focused ? styles.iconContainer :  null}>
                            <FontAwesome5 name="user-alt" size={24} color={focused ? colors.secondary : colors.primary} />
                            {/* <Feather name="user" size={24} color={colors.white} /> */}
                        </View>
                    ),
                }}
            />
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.secondary,
        // borderTopRightRadius: 25,
        // borderTopLeftRadius: 25,
        borderTopWidth: 4,
        paddingTop: 5,
        marginBottom: 4
    },
    iconContainer: {
        backgroundColor: colors.primary,
        borderRadius: 20,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
})