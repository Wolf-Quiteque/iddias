import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../Screens/LoginScreen";
import SighninScreen from "../Screens/SighninScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SighninScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
