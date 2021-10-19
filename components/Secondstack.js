import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ratings from '../screens/Ratings';


const Secondstack = () => {
    const Tab = createMaterialTopTabNavigator();
    return (
      <Tab.Navigator>
        <Tab.Screen name="Ratings" component={Ratings} />
      </Tab.Navigator>
    );
}

export default Secondstack

const styles = StyleSheet.create({})
