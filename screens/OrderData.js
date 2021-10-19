import React, { useState } from 'react'
import { StyleSheet, Text, View, Image,ScrollView, TouchableOpacity, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const OrderData = () => {
     
    const { items, restaurentName } = useSelector(
       (state) => state.cartReducer.selectedItems
     );
    const [tip,setTip] = useState(0);
    // const name = restaurentName; ;
    // console.log(name);
    const total = items
      .map((item) => Number(item.price.replace("₹", "")))
      .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString("en", {
      style: "currency",
      currency: "INR",
    });
    return (
      <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
        <Text
          style={{
            color: "black",
            fontSize: 19,
            fontWeight: "bold",
            padding: 20,
          }}
        >
          Your order at {restaurentName} has been placed for {"₹"}
          {total + 3 + 30}
        </Text>
        <View
          style={{
            borderBottomColor: "#D0D0D0",
            borderBottomWidth: 3,
          }}
        />
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              backgroundColor: "#ff0090",
              padding: 5,
              borderRadius: 7,
            }}
          >
            <MaterialIcons style={{}} name="timer" size={26} color="#f0fff0" />
            <Text
              style={{
                fontSize: 19,
                fontWeight: "700",
                paddingLeft: 7,
                color: "white",
              }}
            >
              Delivery in 30 mins
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                paddingTop: 8,
                color: "#ff8080",
              }}
            >
              Food is being prepared
            </Text>
            <MaterialCommunityIcons
              style={{ marginLeft: 10 }}
              name="food-variant"
              size={28}
              color="#ff4d4d"
            />
          </View>

          <Image
            style={{ width: 300, height: 300, backgroundColor: "white" }}
            source={{
              uri: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/0845c232253239.56766f2d063c9.gif",
            }}
          />
        </View>
        <View
          style={{
            borderBottomColor: "#D0D0D0",
            borderBottomWidth: 3,
          }}
        />
        <View
          style={{ padding: 20, flexDirection: "row", alignItems: "center" }}
        >
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
              borderColor: "#fff0f5",
              borderWidth: 1,
            }}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLXBWH6Tl3ITRFCI-ByH7IR_c0gRQhRsXzQ&usqp=CAU",
            }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#ff6e4a" }}>
              4 valets near the restaurent
            </Text>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "#696969" }}>
              Anyone will pick your order
            </Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "#D0D0D0",
            borderBottomWidth: 3,
          }}
        />
        <View style={{ padding: 20, flexDirection: "row" }}>
          <FontAwesome5 name="hand-holding-heart" size={28} color="#ff0080" />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{ fontSize: 19, fontWeight: "bold", paddingHorizontal: 2 }}
            >
              Tip your hunger Saviour
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                color: "#696969",
                marginRight: 10,
                paddingHorizontal: 2,
              }}
            >
              Thank your delivery partner for helping you stay safe
              indoors.Support them through these tough times with a tip
            </Text>
            <Pressable
              style={{
                paddingTop: 20,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Pressable
                onPress={() => setTip(30)}
                style={{
                  backgroundColor: "#F5F5F5",
                  marginHorizontal: 10,
                  paddingHorizontal: 10,
                  borderRadius: 7,
                }}
              >
                <Text
                  style={{ padding: 10, color: "#002D62", fontWeight: "bold" }}
                >
                  ₹30
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setTip(50)}
                style={{
                  alignItems: "center",
                  backgroundColor: "#F5F5F5",
                  marginHorizontal: 10,
                  borderRadius: 7,
                  // paddingHorizontal: 10,
                }}
              >
                <Text
                  style={{ padding: 4, color: "#002D62", fontWeight: "bold" }}
                >
                  ₹50
                </Text>
                <Text
                  style={{
                    backgroundColor: "orange",
                    paddingHorizontal: 10,
                    fontSize: 14,
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  Most Tipped
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setTip(70)}
                style={{
                  backgroundColor: "#F5F5F5",
                  marginHorizontal: 10,
                  paddingHorizontal: 10,
                  borderRadius: 7,
                }}
              >
                <Text
                  style={{ padding: 10, color: "#002D62", fontWeight: "bold" }}
                >
                  ₹70
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </View>
        {tip ? (
          <View>
            <Text
              style={{
                color: "#034694",
                padding: 10,
                marginLeft: 10,
                marginRight: 10,
                fontSize: 16,
                fontWeight: "600",
                fontFamily: "sans-serif-medium",
              }}
            >
              please pay {"₹"}
              {tip} to your deilvery agent at the time of delivery
            </Text>
            <TouchableOpacity
              onPress={() => setTip(0)}
              activeOpacity={0.7}
              style={{
                padding: 10,
                marginLeft: 10,
                marginRight: 10,
                position: "absolute",
                top: 20,
                left: 80,
                paddingBottom: 40,
              }}
            >
              <Text style={{ color: "red", fontSize: 14, fontWeight: "700" }}>
                (Cancel)
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}

         <Image
          style={{
            width: 190,
            height: 70,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 10,
          }}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmig-j5FRIsSACRtZfq_bo-u5wiZiALBluOw&usqp=CAU",
          }}
        /> 
      </ScrollView>
    );
}

export default OrderData

const styles = StyleSheet.create({})
