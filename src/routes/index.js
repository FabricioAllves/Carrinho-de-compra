import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../Pages/Home'
import Cart from '../Pages/Cart'

const Stack = createNativeStackNavigator()

export default function routes() {


 return (
   <Stack.Navigator>
    <Stack.Screen name='Home' component={Home} options={{ headerShown: false}}/>
    <Stack.Screen name='Cart' component={Cart} options={{ headerTitle: 'Meu Carrinho'}}/>
   </Stack.Navigator>
  );
}