import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SignIn from "../screens/SignInScreen";
import Forgot from "../screens/ForgotPasswordScreens";
import Home from "../screens/HomeScreen";
import Profile from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }} // ✅ BOOLEAN
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
