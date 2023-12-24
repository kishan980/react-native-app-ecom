import { Text, View, StyleSheet, TextInput, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import loginImage from "../../assets/blog-wp-login.png";
import InputBox from "../../components/form/InputBox";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    if (!email || !password) {
      return alert("Please enter Email or password");
    }
    alert("login success fully");
    navigation.navigate("home");
  };
  return (
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
      <View style={styles.btnConatiner}>
        <TouchableOpacity style={styles.loginBtn} onPress={loginHandler}>
          <Text style={styles.textBtn}>Login</Text>
        </TouchableOpacity>
        <Text>
          Already a user please?{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("register")}
          >
            register Here
          </Text>
        </Text>
      </View>
    </View>
  );
};
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
export default Login;
