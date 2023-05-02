import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

const ResultsScreen = ({route}) => {
  const [myList, setMyList] = useState([]);
  const navigation = useNavigation();
  const {answers}=route.params
  //console.log(answers);

useEffect(() =>  {
    axios.post(' https://neat-quail-14.loca.lt', {
      answers
    })
    .then(response => {
      //console.log(response);
      setMyList(response.data)
    })
    .catch(error => {
      error="Server Down"
      myList=error
    });
  },[]);
  //console.log("2")
  //console.log(myList)
  return (
    <SafeAreaView style={{ margin: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding:30
        }}
      >
        <Text>Your Results</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 4,
          }}
        >
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
        <Text>Questions Answered</Text>
        <Text>(29/29)</Text>
      </View>

     
    <View style={styles1.card}>
      <Text style={styles1.title}>Diseases:</Text>
      {/* <div>{myList.Diseases}</div> */}
      {myList && <Text>{myList.Diseases}</Text>}
      <Text>--------------------------------------------</Text>
      <Text style={styles1.title}>Precaution:</Text>
      {/* <div>{myList.Precaution}</div> */}
      
        {myList&& <Text>{myList.Precaution}</Text>}
      {/* <br/>
      <br/> */}
      {/* <Pressable onPress={Answer}>Predict</Pressable>  */}
    </View>
      <Pressable onPress={() => navigation.navigate("Home")} style={{
          backgroundColor: "green",
          padding: 14,
          width:120,
          borderRadius: 25,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
        }}>
          <Text style={{color:"white",textAlign:"center"}}>HOME</Text>
      </Pressable>
    </SafeAreaView>
  );
};
const styles1 = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
  },
});
export default ResultsScreen;

const styles = StyleSheet.create({});
