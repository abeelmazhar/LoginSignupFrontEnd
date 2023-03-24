import { StyleSheet, Text, View } from "react-native";
import Login from "./Login";
import React from "react";

const Homepage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.head1}>This is Homepage</Text>
      <Text
        style={styles.button1}
        onPress={() => {
          navigation.navigate("Login");
        }}
      ></Text>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  head1: {
    fontSize: 30,
    textAlign: "center",
  },
});
