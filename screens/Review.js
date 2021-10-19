import React from "react";
import { StyleSheet, Text, View, Swipeable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native";

const Review = () => {
  const route = useRoute();
//   console.log(route.params);
  const highlights = [
    {
      id: 1,
      name: "Drumstick Soup",
    },
    {
      id: 2,
      name: "Chilli Gobi",
    },
    {
      id: 3,
      name: "Andhra Chicken",
    },
    {
      id: 4,
      name: "cashless payments",
    },
    {
      id: 5,
      name: "Valet service",
    },
  ];
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "600" }}>
            Write a review
          </Text>
          <Text style={{ color: "#909090", fontSize: 15 }}>
            share your experience to help others
          </Text>
        </View>
        <FontAwesome
          style={{ marginRight: 20 }}
          name="pencil-square-o"
          size={24}
          color="#E52B50"
        />
      </View>

      <Text style={{ backgroundColor: "#D8D8D8", height: 4 }} />

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#3CB371",
              padding: 4,
              paddingHorizontal: 10,
              borderRadius: 6,
            }}
          >
            <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
              {route.params.aggregate_rating}
            </Text>
            <Ionicons
              style={{ paddingLeft: 4 }}
              name="star"
              size={18}
              color="white"
            />
          </View>

          <Text
            style={{
              marginLeft: 10,
              padding: 5,
              backgroundColor: "#FF7F50",
              borderRadius: 4,
              color: "white",
              fontWeight: "bold",
            }}
          >
            {route.params.no_of_Delivery} {"Delivery"}
          </Text>
        </View>

        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#3CB371",
              padding: 4,
              paddingHorizontal: 10,
              borderRadius: 6,
            }}
          >
            <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
              4.7
            </Text>
            <Ionicons
              style={{ paddingLeft: 4 }}
              name="star"
              size={18}
              color="white"
            />
          </View>

          <Text
            style={{
              marginLeft: 10,
              padding: 5,
              backgroundColor: "#FF7F50",
              borderRadius: 4,
              color: "white",
              fontWeight: "bold",
            }}
          >
            978 {"Dining"}
          </Text>
        </View>
      </View>

      {/* <View style={{ padding: 10 }}>
        <Text>Review Highlights</Text>
        {highlights.map((highlight) => (
        
            // <Swipeable style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>{highlight.name}</Text>
            // </Swipeable>
         
        ))}
      </View> */}
      <Text style={{ padding: 10 }}>Review Highlights</Text>
      <FlatList
        horizontal
        data={highlights}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { name } }) => (
          <View style={{}}>
            <Text style={{ padding: 7,color:"white", backgroundColor: "#72A0C1",borderRadius:6,paddingLeft:4,paddingRight:4,marginLeft:8, }}>
              {name}
            </Text>
          </View>
        )}
      />
    </>
  );
};

export default Review;

const styles = StyleSheet.create({});
