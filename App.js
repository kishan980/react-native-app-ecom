import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import About from './screens/About';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';
import Checkout from './screens/Checkout';
import Payment from './screens/Payment';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import Account from './screens/Accoutn';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName='login' >
        <Stack.Screen name="home" component={Home} options={{
              headerShown: false,
            }}/>
            <Stack.Screen name="productDetails" component={ProductDetails}/>
        <Stack.Screen name="Mobile" component={About}/>
        <Stack.Screen name="cart" component={Cart}/>
        <Stack.Screen name="checkout" component={Checkout}/>
        <Stack.Screen name="payment" component={Payment}/>
        <Stack.Screen name="login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='register' component={Register}/>
        <Stack.Screen name="account" component={Account}/>  
      </Stack.Navigator>
    </NavigationContainer>
  );
}


