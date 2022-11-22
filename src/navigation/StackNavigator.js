import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AddScreen from "../Screens/AddScreen";
import HomeScreen from "../Screens/HomeScreen";
import EntregaScreen from "../Screens/EntregaScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import SuporteScreen from "../Screens/SuporteScreen";
import PedidoScreen from "../Screens/PedidoScreen";
import LoginScreen from "../Screens/LoginScreen";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Serviços de Entrega" component={EntregaScreen} />
      <Stack.Screen name="Suporte" component={SuporteScreen} />
      <Stack.Screen name="Pedido" component={PedidoScreen} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
