import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';
const HomeScreen = () => {
    const navigation = useNavigation();
    // const [dat, setData] = useState({});
    // const Answer=(()=>
    // {
    //   const data = [1,1,1,1,1,1,1,1,1,1,1,1];
    //   axios.post('http://127.0.0.1:5000/', {
    //     data
    //   })
    //   .then(response => {
    //     console.log(response);
        
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // });
  return (
    <View style={{ marginTop: 15 }}>
      <Image
        style={{ height: 370, width: "100%", resizeMode: "contain" }}
        source={{
          uri: "https://craftypixels.com/placeholder-image/600x315/042550/ffffff.png&text=Breathing",
        }}
      />

      <View style={{ padding: 10 }}>
        <Text
          style={{
            textAlign: "center",
            color: "black",
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Guidelines
        </Text>

        <View
          style={{
            padding: 10,
            backgroundColor: "lightblue",
            borderRadius: 6,
            marginTop: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#722F37",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Choose "YES" if you have the given symptoms
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#722F37",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Choose "NO" if you don't have the given symptoms
            </Text>
          </View>
        </View>
      </View>

      <Pressable
      onPress={() => navigation.navigate("Questionnarie")}
        style={{
          backgroundColor: "green",
          padding: 14,
          width:120,
          borderRadius: 25,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
        }}
      >
        <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Start</Text>
      </Pressable>
      
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
