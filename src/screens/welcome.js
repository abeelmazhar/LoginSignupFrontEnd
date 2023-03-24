import { StyleSheet, Text, View, Image } from "react-native";
import Patern from "../../assets/patern.png";
import Mainlogo from "../../assets/mainlogo.png";
import { button1 } from "../../src/common/button";
import React from "react";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.paternbg} source={Patern} />
      <View style={styles.container1}>
        {/* <Image style={styles.logo} source={Mainlogo} /> */}
        <Text
          style={styles.button1}
          onPress={() => navigation.navigate("Login")}
        
        >
          Login
        </Text>
        <Text
          style={styles.button1}
          onPress={() => navigation.navigate("SignUp")}
        
        >
          Signup
        </Text>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  paternbg: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
  },
  head: {
    fontSize: 30,
    color: "#fff",
  },
  container1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  button1: {
    backgroundColor: "#F50057",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
    minWidth: 150,
    textAlign: "center",
    margin: 10,
  },
});
