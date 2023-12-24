import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useRoute, useNavigation } from "@react-navigation/native";
const Footer = () => {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menu}
        onPress={() => navigation.navigate("home")}
      >
        <AntDesign
          name="home"
          style={[styles.icon, route.name === "home" && styles.active]}
        />
        <Text style={[styles.iconText, route.name === "home" && styles.active]}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menu}
        onPress={() => alert("Notification page")}
      >
        <AntDesign
          name="bells"
          style={[styles.icon, route.name === "notification" && styles.active]}
        />
        <Text
          style={[
            styles.iconText,
            route.name === "notification" && styles.active,
          ]}
        >
          Notification
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.menu}
        onPress={() => navigation.navigate("account")}
      >
        <AntDesign
          name="user"
          style={[styles.icon, route.name === "account" && styles.active]}
        />
        <Text
          style={[styles.iconText, route.name === "account" && styles.active]}
        >
          Account
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate("cart")}>
        <AntDesign
          name="shoppingcart"
          style={[styles.icon, route.name === "cart" && styles.active]}
        />
        <Text style={[styles.iconText, route.name === "cart" && styles.active]}>
          Cart
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menu} onPress={() => {alert("logout"), navigation.navigate("login")}}>
        <AntDesign name="logout" style={styles.icon} />
        <Text
          style={[styles.iconText, route.name === "logout" && styles.active]}
        >
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  menu: {
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    fontSize: 25,
    color: "#000000",
  },
  iconText: {
    color: "#000000",
    fontSize: 10,
  },
  active: {
    color: "blue",
  },
});
export default Footer;
