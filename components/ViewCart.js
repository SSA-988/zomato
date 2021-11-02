import React, { useEffect, useState } from "react";
import { Pressable, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, Modal } from "react-native";
import { useSelector } from "react-redux";
import FinalCheckout from "./FinalCheckout";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {auth,db} from "../firebase"
import firebase from "firebase";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import { ActivityIndicator } from "react-native";
import { useRoute } from "@react-navigation/native";
const ViewCart = (props) => {
  // const items = useSelector(selectCart);
 console.log("🎉",props);
  

  const [modal, setModal] = useState(false);
  const [sound, setSound] = React.useState();
  const [loading,setLoading] = useState(false);

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/zomato.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const navigation = useNavigation();
  const { items, restaurentName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );
  console.log("cart items:👉 ", items);
  const cart = false;
  const total = items
    .map((item) => Number(item.price.replace("₹", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "INR",
  });
  console.log("total: ", totalUSD);
  console.log("total rate : ", total);
  const deliveryCharge = Number(30);
  const donation = Number(3);

  const addToFireStore = () => {
    setLoading(true);
    db.collection("orders").add({
      items: items,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(()=> {
         setModal(false);
        setLoading(false);
         navigation.navigate("OrderData",{
            latitude:props.latitude,
            longitude:props.longitude,
         });
       setTimeout(()=>{
        
         playSound();
       },1000)
    })
   
    
  }

  const checkOut = () => {
     return (
       <View
         style={{
           flex: 1,
           justifyContent: "flex-end",
           backgroundColor: "rgba(0,0,0,0.7)",
         }}
       >
         <Pressable
           onPress={() => setModal(false)}
           style={{
             alignItems: "center",
             justifyContent: "center",
           }}
         >
           <AntDesign
             style={{ paddingBottom: 10 }}
             name="closecircle"
             size={34}
             color="black"
           />
         </Pressable>

         <View
           style={{
             backgroundColor: "white",
             height: 500,
             borderTopRightRadius: 10,
             borderTopLeftRadius: 10,
           }}
         >
           <Text
             style={{
               color: "red",
               textAlign: "center",
               paddingTop: 12,
               fontSize: 17,
               paddingBottom: 9,
               borderBottomColor: "#C0C0C0",
               borderBottomWidth: 0.8,
             }}
           >
             {restaurentName}
           </Text>
           <View
             style={{
               flexDirection: "row",
               alignItems: "center",
               borderBottomColor: "#C0C0C0",
               borderBottomWidth: 0.8,
               padding: 10,
             }}
           >
             <MaterialIcons style={{}} name="timer" size={24} color="green" />
             <Text
               style={{
                 color: "black",
                 fontSize: 17,
                 fontWeight: "600",
                 marginLeft: 6,
               }}
             >
               Delivery in 30 mins
             </Text>
           </View>
           <ScrollView>
             {items.map((item, index) => (
               <FinalCheckout key={index} item={item} />
             ))}
             <View
               style={{
                 borderBottomColor: "#D0D0D0",
                 borderBottomWidth: 1,
               }}
             />
             <View style={{ padding: 10 }}>
               <Text style={{ fontSize: 18, paddingBottom: 4 }}>Offers</Text>
               <View style={{ flexDirection: "row", alignItems: "center" }}>
                 <MaterialCommunityIcons
                   name="brightness-percent"
                   size={24}
                   color="blue"
                 />
                 <Text style={{ marginLeft: 10 }}>Select a Promo code</Text>
               </View>
             </View>

             <View
               style={{
                 borderBottomColor: "#D0D0D0",
                 borderBottomWidth: 1,
               }}
             />

             <View style={{ padding: 10 }}>
               <Text
                 style={{ fontSize: 18, fontWeight: "bold", paddingBottom: 10 }}
               >
                 Climate conscious delivery
               </Text>
               <View>
                 <View style={{ flexDirection: "row", alignItems: "center" }}>
                   <MaterialCommunityIcons
                     name="food-fork-drink"
                     size={27}
                     color="#ADFF2F"
                   />
                   <View style={{ marginLeft: 10 }}>
                     <Text
                       style={{
                         color: "#228B22",
                         fontWeight: "600",
                         fontSize: 15,
                       }}
                     >
                       Dont send cultery, tissues and straws
                     </Text>
                     <Text
                       style={{
                         color: "black",
                         fontWeight: "600",
                         fontSize: 15,
                       }}
                     >
                       Thank you for caring about the environment
                     </Text>
                   </View>
                   <Pressable>
                     <AntDesign
                       style={{ marginLeft: 10 }}
                       name="checksquare"
                       size={24}
                       color="green"
                     />
                   </Pressable>
                 </View>
               </View>
             </View>

             <View
               style={{
                 borderBottomColor: "#D0D0D0",
                 borderBottomWidth: 0.8,
               }}
             />
             <View
               style={{
                 flexDirection: "row",
                 alignItems: "center",
                 padding: 10,
               }}
             >
               <FontAwesome5 name="leaf" size={24} color="#20B2AA" />
               <Text style={{ marginLeft: 10, fontSize: 15 }}>
                 We fund environmental projects to offset carbon footprint of
                 our deliveries
               </Text>
             </View>

             <View
               style={{
                 borderBottomColor: "#D0D0D0",
                 borderBottomWidth: 3,
               }}
             />

             <View style={{ backgroundColor: "#FEF5E7" }}>
               <View
                 style={{
                   flexDirection: "row",
                   alignItems: "center",
                   justifyContent: "space-between",
                   padding: 10,
                 }}
               >
                 <Text>Item total</Text>
                 <Text>
                   {" ₹"}
                   {total}
                 </Text>
               </View>

               <View
                 style={{
                   flexDirection: "row",
                   alignItems: "center",
                   justifyContent: "space-between",
                   padding: 10,
                 }}
               >
                 <Text style={{}}>Delivery charge upto 1 km</Text>
                 <Text>
                   {" ₹"}
                   {deliveryCharge}
                 </Text>
               </View>

               <View
                 style={{
                   flexDirection: "row",
                   alignItems: "center",
                   justifyContent: "space-between",
                   padding: 10,
                 }}
               >
                 <Text>Donate ₹3 to Feeding India </Text>
                 <Text>
                   {" ₹"}
                   {donation}
                 </Text>
               </View>
             </View>

             <View
               style={{
                 borderBottomColor: "#D0D0D0",
                 borderBottomWidth: 3,
               }}
             />
           </ScrollView>

           <View
             style={{
               flexDirection: "row",
               alignItems: "center",
               justifyContent: "space-between",
               paddingVertical: 14,
               padding: 10,
               shadowColor: "#686868",
               shadowOffset: { width: 0, height: 1 },
               shadowOpacity: 1,
               shadowRadius: 2,
               elevation: 5,
             }}
           >
             <Text
               style={{
                 color: "red",
                 fontWeight: "bold",
                 paddingBottom: 3,
                 fontSize: 17,
                 shadowColor: "#000",
                 shadowOffset: { width: 0, height: 1 },
                 shadowOpacity: 0.8,
                 shadowRadius: 2,
                 elevation: 5,
               }}
             >
               GrandTotal
             </Text>
             <Text style={{ color: "red", fontSize: 17, fontWeight: "600" }}>
               {"₹"}
               {total + 3 + 30}
             </Text>
           </View>
           {/* <View
             style={{
               borderBottomColor: "#D0D0D0",
               borderBottomWidth: 3,
             }}
           /> */}
           <TouchableOpacity
             style={{
               backgroundColor: "white",
               padding: 10,
               alignItems: "center",
               //  backgroundColor: "#CB356B",
               backgroundColor: "#e52d27",
               //  borderTopLeftRadius: 8,
               //  borderTopRightRadius: 8,
             }}
             activeOpacity={0.9}
             onPress={() => addToFireStore()}
           >
             <Text style={{ color: "white", fontSize: 17, fontWeight: "700" }}>
               Place Order
             </Text>
           </TouchableOpacity>
         </View>
       </View>
     );
   };
  return (
    <>
       <Modal
          animationType="slide"
          visible={modal}
          transparent={true}
          onCloseRequest={() => setModal(false)}
        >
          {checkOut()}
        </Modal> 

      {total === 0 ? null : (
        <Pressable
          style={{ position: "absolute", bottom: 30, left: 100, }}
          onPress={() =>setModal(true)}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              textAlign: "center", padding: 10,
              width: 180,
              backgroundColor: "#FF3366",
              borderRadius: 6,
            }}
          >
            View Cart{" "}
            {"₹"}
            {total}
          </Text>
        </Pressable>
      )}
      {loading? (
        <ActivityIndicator/>
      ) : null}
    </>
  );
};

export default ViewCart;

const styles = StyleSheet.create({});
