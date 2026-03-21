import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";

import SignIn from "../screens/SignInScreen";
import Forgot from "../screens/ForgotPasswordScreens";
import Home from "../screens/HomeScreen";
import Profile from "../screens/ProfileScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: "white" },
        tabBarIcon: ({ color, size }) => {
          const icons = {
            Explorers: "home",
            Account: "person",
          };

          return (
            <Ionicons name={icons[route.name]} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Explorers" component={Home} />
      <Tab.Screen name="Account" component={Profile} />
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="Main">
            {(props) => <MainTabs {...props} setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="SignIn">
              {(props) => <SignIn {...props} setIsLoggedIn={setIsLoggedIn} />}
            </Stack.Screen>
            <Stack.Screen name="Forgot" component={Forgot} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
