import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Cart from "./Cart";
import { useDispatch } from "react-redux";
import hotelsData from "../data/hotelsData";
import { setCart, setRemoveItems } from "../slices/cartSlice";
import { useSelector } from "react-redux";
import { selectCart, selectTotal } from "../slices/cartSlice";
import { connect } from "react-redux";

const Menu = (props) => {
  const route = useRoute();
  // console.log(props);
  const navigation = useNavigation();
  const menu = props.menu;
  // const restaurentName = route.params.name;
  // console.log("props: ",props);
  const id = menu.id;
  const bestSeller = true;
  const onPress = () => {
    console.warn("pressed", menu.name);
  };
  const [additems, setAdditems] = useState(0);
  const dispatch = useDispatch();
  // const items = useSelector(selectCart);
  // const total = useSelector(selectTotal);

  //  const total = items
  //   .map((item) => Number(item.price.replace("₹", "")))
  //   .reduce((prev, curr) => prev + curr, 0);

  // const totalUSD = total.toLocaleString("en", {
  //   style: "currency",
  //   currency: "INR",
  // });

  const addTocart = (item) => {
    // {menu.id === menu.name}{
    //   const data = dispatch(
    //     setCart({
    //       name: menu.name,
    //       image: menu.image,
    //       id: menu.id,
    //       price: menu.price,
    //     })
    //   );
    //    console.log(data);
    //   setAdditems(additems + 1);
    // }

    const dat = dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurentName: props.restaurentName,
      },
    });

    setAdditems(additems + 1);
    console.log(dat);
  };
  const removeFromCart = (item) => {
    const remove = dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        ...item,
        restaurentName: props.restaurentName,
      },
    });
    setAdditems(Math.max(0, additems - 1));
    console.log(remove);
  };
  return (
    // <Pressable>
    <Pressable>
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 13,
          }}
        >
          <View>
            <Text
              style={{
                width: 160,
                marginLeft: 10,
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {menu.name}
            </Text>
            <Text style={{ marginLeft: 10, fontSize: 16, color: "#686868" }}>
              {menu.price}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  marginLeft: 10,
                  backgroundColor: "#FFFFF0",
                  padding: 3,
                  borderRadius: 4,
                }}
              >
                {[0, 0, 0, 0, 0].map((en, i) => (
                  <FontAwesome
                    key={`${menu.id}-${i}`}
                    style={{ margin: 2, marginHorizontal: 3 }}
                    name={i < Math.floor(menu.star) ? "star" : "star-o"}
                    size={13}
                    color="#FFD700"
                  />
                ))}
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  padding: 2,
                  paddingHorizontal: 4,
                  borderRadius: 5,
                  fontSize: 13,
                  backgroundColor: "#FFF5EE",
                  color: "#E52B50",
                }}
              >
                {(bestSeller && menu.bestSeller) || menu.mustTry}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "#FFCC99",
                alignItems: "center",
                borderRadius: 5,
                marginLeft: 10,
                marginTop: 8,
              }}
            >
              <Text style={{ paddingLeft: 8 }}>Add items to ur Cart</Text>
              <AntDesign
                style={{
                  marginTop: 4,
                  paddingLeft: 5,
                  paddingRight: 5,
                  paddingBottom: 3,
                }}
                name="shoppingcart"
                size={18}
                color="#666666"
              />
            </View>
          </View>

          <Image
            style={{
              width: 120,
              height: 120,
              marginRight: 15,
              marginBottom: 20,
              borderRadius: 10,
              resizeMode: "cover",
            }}
            source={{
              uri: menu.image,
            }}
          />
        </View>
        <Pressable
          style={{
            position: "absolute",
            right: 43,
            top: 115,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#FF3366",
            borderRadius: 5,
          }}
        >
          <Pressable onPress={() => removeFromCart(menu)}>
            <Text
              style={{ fontSize: 25, color: "white", paddingHorizontal: 10 }}
            >
              -
            </Text>
          </Pressable>

          <Pressable >
            <Text
              style={{ fontSize: 20, color: "white", paddingHorizontal: 10 }}
            >
              {additems}
            </Text>
          </Pressable>

          <Pressable onPress={() => addTocart(menu)}>
            <Text
              style={{ fontSize: 20, color: "white", paddingHorizontal: 10 }}
            >
              +
            </Text>
          </Pressable>
        </Pressable>
      </ScrollView>
    </Pressable>
  );
};

export default Menu;

// export default connect(null, mapDispatchToProps) (Menu)

const styles = StyleSheet.create({});

//() => setAdditems(Math.max(0, additems - 1))
