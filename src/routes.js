import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'

const Stack = createNativeStackNavigator();

export default function Routes() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{headerShown: false }}
            />

            <Stack.Screen
                name="Login"
                component={Login}
                options={{headerShown: false }}
            />

            <Stack.Screen
                name="Register"
                component={Register}
                options={{headerShown: false }}
            />
        </Stack.Navigator>
    )

}