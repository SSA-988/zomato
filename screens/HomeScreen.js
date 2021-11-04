import React, { useState ,useEffect} from "react";
import { Image, KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, View,FlatList } from 'react-native'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {GOOGLE_MAPS_API_KEY} from "@env";
import GetLocation from "react-native-get-location";
import { MaterialIcons } from "@expo/vector-icons";
import { Avatar } from 'react-native-elements';
import { TextInput } from 'react-native';
import { EvilIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { ScrollView } from "react-native-gesture-handler";
import Hotels from '../components/Hotels';
import hotels from "../data/hotels";
import hotelsData from '../data/hotelsData';
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import Categories from "../components/Categories";

 const restaurent = hotelsData[0];
//  console.log(restaurent);

const HomeScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [data, setData] = useState([]);
  const navigation = useNavigation();

    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        console.log(location);
        const lat = location.coords.latitude;
        const long = location.coords.longitude;
        fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&result_type=street_address&key=${GOOGLE_MAPS_API_KEY}`
        )
          .then((response) => response.json())
          .then((responseJson) => {
            console.log("😁😁😁😁", responseJson);
            console.log(
              "ADDRESS GEOCODE is BACK!! => " + JSON.stringify(responseJson)
            );

            var street_name = responseJson.results[0].address_components.filter(
              (x) => x.types.filter((t) => t == "premise").length > 0
            )[0].long_name;
            console.log(street_name);

            var homeAdress = responseJson.results[0].address_components.filter(
              (x) => x.types.filter((t) => t == "political").length > 0
            )[0].long_name;
            console.log(homeAdress);

            var locality = responseJson.results[0].address_components.filter(
              (x) =>
                x.types.filter((t) => t == "sublocality_level_1").length > 0
            )[0].long_name;
            console.log(locality);

            var city = responseJson.results[0].address_components.filter(
              (x) => x.types.filter((t) => t == "locality").length > 0
            )[0].long_name;
            console.log(city);

            const finalAdress =
              street_name +
              " " +
              homeAdress +
              "," +
              " " +
              locality +
              "," +
              " " +
              city;
            console.log("🎉🎉", finalAdress);
            setData(finalAdress);
          });
      })();
    }, []);
    let text = "Waiting..";
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
    console.log("❤️❤️❤️", data);
    console.log(text);
   const placeholderText = ["one", "two", `${data}`];
   const [state, setState] = useState("");

   useEffect(() => {
     placeholderText.map((val, index) =>
       setTimeout(() => {
         setState(placeholderText[index]);
       }, 2000)
     );
   }, []);

   console.log("👌👌",state);
    return (
      <KeyboardAvoidingView style={{ flex: 1, marginTop: 25 }}>
        <ScrollView style={{ flex: 1 }}>
          <SafeAreaView>
            {/* <GooglePlacesAutocomplete
            style={{
              flex: 1,
              textInput: {
                fontSize: 18,
              },
            }}
            currentLocation={true}
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true
              console.log(data);
              console.log(details);
            }}
            // renderLeftButton={() => (
            //   <Image source={require("path/custom/left-icon")} />
            // )}
            placeholder="where from"
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: "en",
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={200}
            fetchDetails={true}
            returnKeyType={"search"}
            enablePoweredByContainer={false}
          /> */}

            <GooglePlacesAutocomplete
              textInputProps={{ placeholderTextColor: "#CD5C5C" }}
              styles={{
                container: {
                  flex: 0,
                },
                description: {
                  fontWeight: "bold",
                },
                textInput: {
                  marginTop: 4,
                  fontSize: 14,
                  // backgroundColor: "#F8F8FF",
                  backgroundColor: "transparent",
                },
                textContainer: {
                  color: "#CD5C5C",
                },
                textStyle: {
                  textDecorationLine: "underline",
                },
                textInputContainer: {
                  alignItems: "center",
                  width: "97%",
                },
              }}
              minLength={2}
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data);
                console.log(details);
              }}
              renderLeftButton={() => (
                <MaterialIcons
                  style={{ marginLeft: 15 }}
                  name="location-on"
                  size={30}
                  color="#cb202d"
                />
              )}
              renderRightButton={() => (
                <Avatar
                  rounded
                  source={{
                    uri: "https://lh3.googleusercontent.com/ogw/ADea4I64lFPV_IALrH2YihJEIRgBCEV02BDG_fxSZeI0=s32-c-mo",
                  }}
                />
              )}
              fetchDetails={true}
              currentLocation={true}
              returnKeyType={"search"}
              enablePoweredByContainer={false}
              query={{
                key: GOOGLE_MAPS_API_KEY,
                language: "en",
              }}
              nearbyPlacesAPI="GooglePlacesSearch"
              debounce={200}
              placeholder={data}
              // listViewDisplayed={"auto"}
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
            <Pressable onPress={()=>navigation.navigate("Zomato_Screen")} style={{ marginLeft: 5 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBjnMjX8qQb9mLh_IBBHP90SZXccv6uTa662T2Ljfp2xrvNO5IrJmgeWC-RpS_Bxkfzak&usqp=CAU",
                  }}
                />
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://cdn.businesstraveller.com/wp-content/uploads/fly-images/1002269/zomato-infinity-dining-916x516-1-916x516.jpg",
                  }}
                />
              </View>
            </Pressable>
            <Text
              style={{
                margin: 10,
                fontSize: 20,
                fontWeight: "700",
                paddingLeft: 6,
              }}
            >
              Eat what makes you happy
            </Text>
            <Pressable>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 11,
                }}
              >
                <View style={{ margin: 6 }}>
                  <Image
                    style={styles.MiddleImage}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZDb8hWL40qKbszAavTSLFkyOcAhvnPmgXw&usqp=CAU",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "gray",
                      margin: 10,
                      textAlign: "center",
                    }}
                  >
                    Thalis
                  </Text>
                </View>

                <View style={{ margin: 8 }}>
                  <Image
                    style={styles.MiddleImage}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2fIIZ5yHqkqXHgg9TuQuJ_mFZbINJLt1ODQ&usqp=CAU",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "gray",
                      margin: 10,
                      textAlign: "center",
                    }}
                  >
                    Pizzas
                  </Text>
                </View>

                <View style={{ margin: 8 }}>
                  <Image
                    style={styles.MiddleImage}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-SsbTrLAm9o9ABakjoILX9G5LIDNJnVwvA&usqp=CAU",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "gray",
                      margin: 10,
                      textAlign: "center",
                    }}
                  >
                    Burger
                  </Text>
                </View>

                <View style={{ margin: 8 }}>
                  <Image
                    style={styles.MiddleImage}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsC7uWf7rd0qrXk2zCpasTV8W-HCcr9JeKQ&usqp=CAU",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "gray",
                      margin: 10,
                      textAlign: "center",
                    }}
                  >
                    Dosas
                  </Text>
                </View>
              </View>

              {/* second view */}
              <View
                style={{
                  margin: 8,
                  flexDirection: "row",
                  alignItems: "center",
                  // marginHorizontal:25,
                  paddingHorizontal: 12,
                }}
              >
                <View style={{ margin: 8 }}>
                  <Image
                    style={styles.MiddleImage}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK-E4C15AopqcTWHrtjReGhOp98FYcky4t6A&usqp=CAU",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "gray",
                      margin: 10,
                      textAlign: "center",
                      textAlign: "center",
                    }}
                  >
                    Juices
                  </Text>
                </View>

                <View style={{ margin: 8 }}>
                  <Image
                    style={styles.MiddleImage}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz34B9O5_oTPvIrvHwX1tqkuFv1p8tW0DFjQ&usqp=CAU",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "gray",
                      margin: 10,
                      textAlign: "center",
                      textAlign: "center",
                    }}
                  >
                    Rolls
                  </Text>
                </View>

                <View style={{ margin: 8 }}>
                  <Image
                    style={styles.MiddleImage}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL27mycOtyGCsLQCjmoVCjW2N_s4k8ce97Bg&usqp=CAU",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "gray",
                      margin: 10,
                      textAlign: "center",
                      textAlign: "center",
                    }}
                  >
                    Fries
                  </Text>
                </View>
              </View>
            </Pressable>
            {/* <Hotels restaurent={restaurent}/> */}
            <FlatList
              data={hotelsData}
              renderItem={({ item }) => <Hotels restaurent={item} />}
            />
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    );
}

export default HomeScreen

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
  swipeable: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  swipeableText: {
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderColor: "#DCDCDC",
    borderRadius: 7,
    padding: 7,
    margin: 5,
  },
  image: {
    margin: 10,
    borderRadius: 10,
    width: 158,
    height: 158,
    aspectRatio: 5 / 3,
    resizeMode: "cover",
  },
  MiddleImage:{
    width:70,
    height:70,
    borderRadius:35,
    resizeMode:"cover",
  }
});
