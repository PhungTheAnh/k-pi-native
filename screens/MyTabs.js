import React from 'react';
import NewsScreen from "./NewsScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import RadioScreen from "./RadioScreen";
import IconSimple from "react-native-vector-icons/SimpleLineIcons"
const MyTabs = () => {
    const Tab = createBottomTabNavigator();
    const screenOptions = {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle : {
            height: 60,
            position:"absolute",
            bottom: 0,
            left: 0,
            elevation: 0,
            background: "white"
        }
    }
    return (
        <Tab.Navigator initialRouteName={"Banner"} screenOptions={screenOptions} >
            <Tab.Screen name="Tin tức" component={NewsScreen} options={{
                tabBarIcon: ()=> {
                    <IconSimple name={"book-open"} size={24} color={"#93C572"} />
                }
            }} />
            <Tab.Screen name="Radio" component={RadioScreen} />
        </Tab.Navigator>
    );
};

export default MyTabs;