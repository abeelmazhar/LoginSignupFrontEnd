import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import mainLogo from "../../assets/mainlogo.png";
import Patern from "../../assets/patern.png";

//import Verification from "./Verification";
//import { head1 } from "../common/formcss";
//import { button1 } from "../../src/common/button";

const Signup = ({ navigation }) => {
  const [fdata, setFdata] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    dob: "",
  });

  const [errmsg, setErrmsg] = useState(null);
  const sendToBackend = () => {
    //console.log(fdata);
    if (
      fdata.name == "" ||
      fdata.email == "" ||
      fdata.password == "" ||
      fdata.cpassword == "" ||
      fdata.dob == ""
    ) {
      setErrmsg("all fields are required");
      return;
    } else {
      if (fdata.password != fdata.cpassword) {
        setErrmsg("password and confirm pasword must be same");
        return;
      } else {
        fetch("http://172.20.10.5:5000/verify", {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(fdata),
        })
          .then((data) => {
            console.log("ghhhcgfhvhgvghvg");
            if (data.error == "invalid credential") {
              setErrmsg("invalid credntial");
            } else if (data.message === "verification code sent you email") {
              console.log(data.udata);
              alert(data.message);
              navigation.navigate("Verification", { userdata: data.udata });
            }
            console.log("ghhhcgfhvhgvghvg");
          })
          .then((res) => {
            console.log("ghhhcgfhvhgvghvg");
            res.json();
          });
      }
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.paternbg} source={Patern} />
      <View style={styles.container1}>
        <View style={styles.s1}></View>
        <ScrollView style={styles.s2}>
          <Text style={styles.head1}>Create a new Account</Text>
          <View style={styles.head3}>
            <Text style={styles.link2}>
              Already Registered?
              <Text
                style={styles.link}
                onPress={() => navigation.navigate("Login")}
              >
                login here
              </Text>
            </Text>
          </View>
          {errmsg ? <Text style={styles.errmsg}>{errmsg}</Text> : null}

          <View style={styles.formgroup}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.emailInput}
              placeholder="Enter your Name"
              onPressIn={() => setErrmsg(null)}
              onChangeText={(text) => setFdata({ ...fdata, name: text })}
            />
          </View>
          <View style={styles.formgroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.emailInput}
              placeholder="Enter your Email"
              onPressIn={() => setErrmsg(null)}
              onChangeText={(text) => setFdata({ ...fdata, email: text })}
            />
          </View>
          <View style={styles.formgroup}>
            <Text style={styles.label}>DOB</Text>
            <TextInput
              style={styles.emailInput}
              placeholder="Enter your DOB"
              onPressIn={() => setErrmsg(null)}
              onChangeText={(text) => setFdata({ ...fdata, dob: text })}
            />
          </View>
          <View style={styles.formgroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.emailInput}
              placeholder="Enter your Paasword"
              onPressIn={() => setErrmsg(null)}
              secureTextEntry={true}
              onChangeText={(text) => setFdata({ ...fdata, password: text })}
            />
          </View>
          <View style={styles.formgroup}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.emailInput}
              placeholder="Confirm Passsword"
              onPressIn={() => setErrmsg(null)}
              secureTextEntry={true}
              onChangeText={(text) => setFdata({ ...fdata, cpassword: text })}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              sendToBackend();
            }}
          >
            <Text style={styles.button1}>Signup</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Signup;

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
    height: "10%",
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
    height: "90%",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
  },
  head1: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: 500,
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
    padding: 10,
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
