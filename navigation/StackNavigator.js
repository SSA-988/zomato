import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import HotelRoom from "../screens/HotelRoom";
import TabsNavigator from "./TabsNavigator";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Review from "../screens/Review";
import Photos from "../screens/Photos";
import OrderData from "../screens/OrderData";


const StackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HotelRoom"
          component={HotelRoom}
          style={{ marginTop: 40 }}
          options={{ headerShown: false, headerBackTitle: false }}
        />
        <Stack.Screen
          name="Review"
          component={Review}
          style={{ marginTop: 40 }}
          options={{ headerTitle: "Reviews" }}
        />
        <Stack.Screen
          name="Photos"
          component={Photos}
          style={{ marginTop: 40 }}
          options={{ headerTitle: "Photos", headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="OrderData"
          component={OrderData}
          style={{ marginTop: 40 }}
          options={{ headerTitle: "Your Order", headerTitleAlign: "center",headerTintColor: "white",headerStyle: { backgroundColor:"green"}}}
        />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
