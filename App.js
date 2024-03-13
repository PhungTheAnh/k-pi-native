import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import BannerScreen from "./screens/BannerScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();
export default function App() {
    const [changeScreen, setChangeScreen] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setChangeScreen(true)
        }, 1000)
    }, [])
  return (
          <NavigationContainer>
              <Stack.Navigator screenOptions={{ headerShown: false }} >
                  {
                      changeScreen ? <Stack.Screen name="Login" component={LoginScreen} /> :
                          <Stack.Screen name="Banner" component={BannerScreen} />
                  }
                  <Stack.Screen name="Home" component={HomeScreen} />
              </Stack.Navigator>
          </NavigationContainer>
  );
}

