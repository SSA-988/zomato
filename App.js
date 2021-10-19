import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Provider} from "react-redux"
import configureStore from "./store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import StackNavigator from "./navigation/StackNavigator";
import TabsNavigator from './navigation/TabsNavigator';

const store = configureStore();

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer independent={true}>
        <SafeAreaView style={{ flex: 1 }}>
          {/* <Stack.Navigator>
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
            <Stack.Screen
              name="hotel"
              component={Secondstack}
              options={{ headerShown: false }}
            />
          </Stack.Navigator> */}
         <StackNavigator />
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );

}

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

//Safety purpsoe.

// options={({route}) => ({
//               title:route.params.name,
//               headerShadowVisible:false,
//             })}

