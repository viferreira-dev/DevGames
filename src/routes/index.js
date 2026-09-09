import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Pages/Home'
import Detalhes from '../Pages/Detalhes'
import Search from '../Pages/Search'
import Favoritos from '../Pages/Favoritos'
import Categoria from '../Pages/Categoria'

const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false
                }} />

            <Stack.Screen
                name='Detalhes'
                component={Detalhes}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='Search'
                component={Search}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='Favoritos'
                component={Favoritos}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='Categoria'
                component={Categoria}
                options={{
                    headerShown: false
                }}
            />

        </Stack.Navigator>
    )
}