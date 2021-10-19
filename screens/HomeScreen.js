import React from 'react'
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


 const restaurent = hotelsData[0];
//  console.log(restaurent);

const HomeScreen = () => {
  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
 })
    .then((location) => {
      console.log(location);
    })
    .catch((error) => {
      const { code, message } = error;
      console.warn(code, message);
   });
   const leftActions = () => {
    return (
      <View>
        <Text>{"   "}</Text>
      </View>
    )
    };


    const rightActions = () => {
       return (
         <View>
           <Text>{"   "}</Text>
         </View>
       );
    }
    return (
      <KeyboardAvoidingView style={{ flex: 1, marginTop: 25 }}>
        <ScrollView>
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
              styles={{
                container: {
                  flex: 0,
                },
                description: {
                  fontWeight: "bold",
                },
                textInput: {
                  fontSize: 20,
                  backgroundColor: "transparent",
                },
                textStyle: {
                  textDecorationLine: "underline",
                },
                textInputContainer: {
                  alignItems: "center",
                  width: "97%",

                  // borderBottomWidth: 2,
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
              placeholder="where from"
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
            <Swipeable
              renderLeftActions={leftActions}
              renderRightActions={rightActions}
            >
              <View style={styles.swipeable}>
                <Text style={styles.swipeableText}>Max Safety</Text>
                <Text style={styles.swipeableText}>PRO</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "#DCDCDC",
                    borderRadius: 7,
                    padding: 5,
                    backgroundColor: "#F5F5F5",
                  }}
                >
                  <Text>Cuisines</Text>
                  <MaterialIcons
                    name="arrow-drop-down"
                    size={24}
                    color="black"
                  />
                </View>
                <Text style={styles.swipeableText}>Rating 4.0+</Text>
                <Text style={styles.swipeableText}>Fastest delivery</Text>
                <Text style={styles.swipeableText}>Offers</Text>
                <Text style={styles.swipeableText}>TakeAway</Text>
              </View>
            </Swipeable>
            <Pressable>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 10,
                }}
              >
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1MWL_qbp_wBYMELGU7T4mWgLOv2yp753JA&usqp=CAU",
                  }}
                />
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4_Kg1xl9wtz0D06fccbS21r3M8QpNb95Vw&usqp=CAU",
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 10,
                }}
              >
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--kKPFAk0eLXSnXKUMW9uHaQ1Rkg6xo11Ng&usqp=CAU",
                  }}
                />
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQnofgcSurlaWEGZoQ5RaHN9GVA4UWygBM2g&usqp=CAU",
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
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRZDb8hWL40qKbszAavTSLFkyOcAhvnPmgXw&usqp=CAU",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "gray",
                      margin: 10,
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
                    }}
                  >
                    Fries
                  </Text>
                </View>

                <View style={{ margin: 8 }}>
                  <Image
                    style={styles.MiddleImage}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRty1EtgKGI8ChGRVIfvewXaIYi7lE1nOdSOA&usqp=CAU",
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      color: "gray",
                      margin: 10,
                    }}
                  >
                    Coffee
                  </Text>
                </View>
              </View>
            </Pressable>
            {/* <Hotels restaurent={restaurent}/> */}
            <FlatList data={hotelsData}  renderItem={({item}) => <Hotels restaurent={item}/>}/>
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    );
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
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
    width: 170,
    height: 110,
    aspectRatio: 5 / 3,
    resizeMode: "cover",
  },
  MiddleImage:{
    width:80,
    height:80,
    borderRadius:40,
    resizeMode:"cover",
  }
});
