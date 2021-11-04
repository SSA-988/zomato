import React from 'react'
import { FlatList, ScrollView, TextInput } from 'react-native';
import { Image, SafeAreaView } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import Hotels from '../components/Hotels';
import hotelsData from '../data/hotelsData';
import { EvilIcons } from "@expo/vector-icons";
import Categories from '../components/Categories';
const Zomato_Screen = () => {
    return (
      <View style={{ marginTop: 30 }}>
        <Image
          style={{ aspectRatio: 5 / 3, resizeMode: "contain" }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_ZmxCDTqj_RuVBZ60s_3By74BiVI3cwYkA&usqp=CAU",
          }}
        />
        <View style={styles.container}>
          <EvilIcons
            style={{ marginRight: 10 }}
            name="search"
            size={28}
            color="#cb202d"
          />
          <TextInput
            style={{ fontSize: 18 }}
            placeholder="Restaurent name, cuisine, or a dish"
          />
        </View>
        <Categories/>
        <FlatList
        showVerticalScrollbar={false}
        showsVerticalScrollIndicator={false}
          inverted
          data={hotelsData}
          renderItem={({ item }) => <Hotels restaurent={item} />}
        />
      </View>
    );
}

export default Zomato_Screen

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 7,
    marginLeft: 9,
    marginTop: 10,
    marginRight: 9,
    backgroundColor: "#e7e7e7",
    borderColor: "#A0A0A0",
  },
});
