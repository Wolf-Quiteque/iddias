import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ChatScreen from "../Screens/SaldoScreen";
import AddScreen from "../Screens/AddScreen";
import ActivityScreen from "../Screens/ActivityScreen";
import { StyleSheet, Text, View, Image } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import ProfileScreen from "../Screens/ProfileScreen";
import { MainStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 60,
          backgroundColor: "#15abb5",
        },

        tabBarIcon: ({ focused, size, color }) => {
          let iconName;

          if (route.name === "News Feed") {
            iconName = focused ? "newspaper" : "newspaper-outline";
            size = focused ? size + 8 : size + 5;
            color = focused ? "#000000" : "#ffffff";
          } else if (route.name === "Chat") {
            iconName = focused ? "chatbox" : "chatbox-outline";
            size = focused ? size + 8 : size + 5;
            color = focused ? "#000000" : "#ffffff";
          } else if (route.name === "Group") {
            iconName = focused ? "people-circle" : "people-circle-outline";
            size = focused ? size + 8 : size + 5;
            color = focused ? "#000000" : "#ffffff";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
            size = focused ? size + 8 : size + 5;
            color = focused ? "#000000" : "#ffffff";
          } else if (route.name === "Profile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
            size = focused ? size + 8 : size + 5;
            color = focused ? "#000000" : "#ffffff";
          }
          return <Ionic name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: "black",
        showLabel: false,
        headerTitleStyle: {
          color: "#fff",
        },
      }}
    >
      <Tab.Screen name="News Feed" component={MainStackNavigator}></Tab.Screen>
      <Tab.Screen name="Chat" component={AddScreen}></Tab.Screen>
      <Tab.Screen name="Group" component={AddScreen}></Tab.Screen>
      <Tab.Screen name="Search" component={ActivityScreen}></Tab.Screen>
      <Tab.Screen name="Profile" component={ProfileScreen}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
