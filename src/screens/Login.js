import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import mainLogo from "../../assets/mainlogo.png";
import Patern from "../../assets/patern.png";
//import { head1 } from "../common/formcss";
//import { button1 } from "../../src/common/button";
import { useState } from "react";

const Login = ({ navigation }) => {
  const [fdata, setFdata] = useState({
    name: "",
    email: "",
  });

  const [errmsg, setErrmsg] = useState(null);
  const sendToBackend = () => {
    if (fdata.email == "" || fdata.password == "") {
      setErrmsg("all fields are required");
      return;
    } else {
      fetch("http://172.20.10.5:5000/signup", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(fdata),
      })
        .then((res) => res.json())
        .then((data) => {
          //console.log(data);
          if (data.error) {
            setErrmsg(data.error);
          } else {
            alert("Login successfully");
            navigation.navigate("Homepage");
          }
        });
    }
    return (
      <View>
        <Image style={styles.paternbg} source={Patern} />

        <View style={styles.container1}>
          <View style={styles.s1}>
            <Image style={styles.logo} source={mainLogo} />
            <Text style={styles.h1}>Find your partner online</Text>
          </View>
          <View style={styles.s2}>
            <Text style={styles.head1}>Login</Text>
            <Text style={styles.head2}>Sign in to Continue</Text>
            {errmsg ? <Text style={styles.errmsg}>{errmsg}</Text> : null}

            <View style={styles.formgroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.emailInput}
                onChangeText={(text) => setFdata({ ...fdata, email: text })}
                placeholder="Enter your Email"
              />
            </View>
            <View style={styles.formgroup}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.emailInput}
                secureTextEntry={true}
                onChangeText={(text) => setFdata({ ...fdata, password: text })}
                placeholder="Enter your Password"
              />
            </View>
            <View style={styles.fp}>
              <Text style={styles.link}>Forget Password</Text>
            </View>
            <Text style={styles.button1} onPress={() => sendToBackend()}>
              Login
            </Text>
            <View style={styles.head3}>
              <Text style={styles.link2}>
                Don't have an Account?{" "}
                <Text
                  style={styles.link}
                  onPress={() => navigation.navigate("SignUp")}
                >
                  Create a new Account
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
};

export default Login;

const styles = StyleSheet.create({
  // container: {
  //   width: "100%",
  //   height: "100%",
  // },
  paternbg: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
  },
  container1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  s1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40%",
    width: "100%",
  },
  h1: {
    fontSize: 30,
    color: "#fff",
  },
  h2: {
    fontSize: 30,
    color: "#fff",
  },
  s2: {
    display: "flex",
    backgroundColor: "#fff",
    width: "100%",
    height: "60%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
  },
  head1: {
    fontSize: 30,
    textAlign: "center",
  },
  head2: {
    fontSize: 15,
    textAlign: "center",
  },
  formgroup: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginVertical: 10,
  },
  label: {
    fontSize: 17,
    color: "#000",
    marginBottom: 5,
    marginLeft: 10,
  },
  emailInput: {
    backgroundColor: "#FfB0CC",
    borderRadius: 20,
    paddingVertical: 10,
  },
  fp: {
    display: "flex",
    alignItems: "flex-end",
    marginRight: 10,
    marginVertical: 5,
  },
  link: {
    color: "#f50057",
    fontSize: 15,
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
  link2: {
    color: "grey",
    fontSize: 15,
  },
  head3: {
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },
  errmsg: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    backgroundColor: "#F50057",
    padding: 5,
    borderRadius: 10,
  },
});
