import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreen';
import HotelRoom from '../screens/HotelRoom';
import Secondstack from './Secondstack';

const MainStack = () => {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <SafeAreaView>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HotelRoom"
              component={HotelRoom}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    );
}

export default MainStack

const styles = StyleSheet.create({})
