import React from 'react'
import { FlatList, ScrollView } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native'

const Photos = () => {
    const data = [
      {
        id: 1,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQODYF5S1WtA0vNok-PZBDAM-NgT_I6qnChLQ&usqp=CAU",
      },
      {
        id: 2,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUfsShboI2F8QOEDc_zVxCiOKHYHpPTJ6eIQ&usqp=CAU",
      },
      {
        id: 3,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlE_PR-ISK2IpgWRtT5_Jz7knoSXohnXlF2g&usqp=CAU",
      },
      {
        id: 4,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJh4Ur01uDqkPqlxobwvoFw2RPYERvVnMU1A&usqp=CAU",
      },
      {
        id: 5,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXts2emTj_L4wzejkX22zKvZSlOWQHFKxUfw&usqp=CAU",
      },
      {
        id: 6,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRDao_6jyfpJ7yLHCCmYxeLuiqSVwb1SGElg&usqp=CAU",
      },
      {
        id: 7,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSc5RBebh33cxwRB7d4hp3U-ZG7mzYDAGHFw&usqp=CAU",
      },
      {
        id: 8,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQBDd8GqgZSj1a1eIuqrA2_qXB0rFKL1cHCw&usqp=CAU",
      },
      {
        id: 9,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbZg_Na4ZrbqBh7yg-DRVaW67Cr_0OvMPpYQ&usqp=CAU",
      },
      {
        id: 10,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzrRx27dPxnSRlunzPkGjE56YWDa1nE636Gw&usqp=CAU",
      },
      {
        id: 11,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53kXKO-gWRnyuWVi8rf2VzLD5GF463BQ-8w&usqp=CAU",
      },
      {
        id: 12,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAtWGIws0wlkNJoRr8nflNbHDC_J-mS_IBWA&usqp=CAU",
      },
      {
        id: 13,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9V82zb7b2gwCrYrYJhCeeFEVwVo9YqlVCjQ&usqp=CAU",
      },
      {
        id: 14,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlR-jsYtXJQEmLidZ23XvwCrdSdQs7FRZrGQ&usqp=CAU",
      },
      {
        id: 15,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSgfqss0vxfO0af4ocfSXrm20jT7ZWVBF14g&usqp=CAU",
      },
      {
        id: 16,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMWtJ7t1_OXrMtsN0oJhNYrmcgetWc6zQufA&usqp=CAU",
      },
      {
        id: 17,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlimPjOYWebmZ05AZhM214JenbOjhuZkYoWA&usqp=CAU",
      },
      {
        id: 18,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrI38yeeDOduk8bn5cc5yXSeSINrLyoNt0ng&usqp=CAU",
      },
      {
        id: 19,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwn9WdXE9qs2Ay_LENjWG03cazh78Pt_Y9ew&usqp=CAU",
      },
      {
        id: 20,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp30jD2XI3BCEL9-0BWcIOt5TlM56932SALA&usqp=CAU",
      },
      {
        id: 21,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRkHS7TM-0_yY_4J-n57xNhz2zWrlRKpFSTw&usqp=CAU",
      },
      {
        id: 22,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdznn80LyqSyWeMFryPjGBQaNS7JG-_8aUjw&usqp=CAU",
      },
      {
        id: 23,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFHc8CCuIcycOIwtHtf1FPevbDKAl6Rv_laQ&usqp=CAU",
      },
      {
        id: 24,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5RQ1qj7nIPQkrOvCEWnrM5YMDNKhkW8tvbA&usqp=CAU",
      },
      {
        id: 25,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXaZUrzOzOXjE7igvQbQSnRgzRN-RKqenvMA&usqp=CAU",
      },
      {
        id: 26,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5LpqyZCh_tBm6ZUMEKsM1rDvnEaXE0SGoA&usqp=CAU",
      },
      {
        id: 27,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlg8QBZ3LDr4pCBJAGJ-I2kucgIUupBLNVg&usqp=CAU",
      },
      {
        id: 28,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtQyJYQbtbeTPgv7GTMMzmEOwNDpYxzP96XQ&usqp=CAU",
      },
      {
        id: 29,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHCu7QEJ22jHO7KK_yNWG-IFoq3CcpmBXQpw&usqp=CAU",
      },
      {
        id: 30,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHMo9chpLKhRuyTe6AwIc-VKwlo-w-wunfg&usqp=CAU",
      },
    ];
    return (
      <ScrollView
        horizontal
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
        style={{}}
      >
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          numColumns={3}
          renderItem={({ item }) => (
            <View
              style={{
                // padding: 10,
                flex: 1,
                flexDirection: "row",
                flexWrap: "wrap",
                padding:6,
              }}
            >
              <Image
                
                resizeMode="cover"
                style={{ width: 120, height: 120 }}
                source={{ uri: item.image }}
              />
            </View>
          )}
        />
      </ScrollView>
    );
}

export default Photos

const styles = StyleSheet.create({})
