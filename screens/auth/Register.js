import { Text, View, StyleSheet, TextInput, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import loginImage from "../../assets/blog-wp-login.png";
import InputBox from "../../components/form/InputBox";

const Register = ({navigation})=>{
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name,setName]=useState("")
  const [address, setAddress]=useState("")
  const [city,setCity]=useState('')
  const [contact, setContact]=useState("")

  const registerHandler = () => {
    if (!email || !password || !name || !address || !city || !contact) {
      return alert("Please enter Email or password or name or address or city or contact");
    }
    alert("register success fully");
    navigation.navigate("home");
  };
  return (
    <ScrollView>

    <View style={styles.container}>
      <Image source={loginImage} style={styles.image} />
      <InputBox
        placeholder="Enter Your Email"
        autoComplete={"email"}
        value={email}
        setValue={setEmail}
        />
      <InputBox
        placeholder="Enter Your Password"
        secureTextEntry={true}
        value={password}
        setValue={setPassword}
        />
       <InputBox
        placeholder="Enter Your Name"
        secureTextEntry={true}
        value={name}
        setValue={setName}
        />

      <InputBox
        placeholder="Enter Your Address"
        secureTextEntry={true}
        value={address}
        setValue={setAddress}
        />

      <InputBox
        placeholder="Enter Your City"
        secureTextEntry={true}
        value={city}
        setValue={setCity}
        />
            <InputBox
        placeholder="Enter Your Contact"
        secureTextEntry={true}
        value={contact}
        setValue={setContact}
        />

      <View style={styles.btnConatiner}>
        <TouchableOpacity style={styles.loginBtn} onPress={registerHandler}>
          <Text style={styles.textBtn}>Register</Text>
        </TouchableOpacity>
        <Text>
          Not a user yet?{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("login")}
            >
            login Here
          </Text>
        </Text>
      </View>
    </View>
            </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // alignItems:"center",
    justifyContent: "center",
    height: "100%",
  },
  image: {
    height: 200,
    width: "100%",
    resizeMode: "contain",
  },
  btnConatiner: {
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn: {
    backgroundColor: "#000000",
    width: "80%",
    justifyContent: "center",
    height: 40,
    borderRadius: 10,
    marginVertical: 20,
  },
  textBtn: {
    color: "#ffffff",
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: 18,
  },
  link: {
    color: "red",
  },
});
export default Register