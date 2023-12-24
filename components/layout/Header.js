import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";
const Header = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearch= ()=>{
    
    setSearchText('')
  }
  return (
    <View style={{ height: 90, backgroundColor: "lightgray", marginTop:30 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
        <TouchableOpacity style={styles.searchIcon} onPress={handleSearch}>
          <Icon name="search" style={styles.icon}></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  inputBox: {
    borderWidth: 0.3,
    width: "100%",
    position: "absolute",
    left: 15,
    height: 40,
    color: "#000000",
    backgroundColor: "#ffffff",
    fontSize: 17,
    borderRadius: 5,
  },
  searchIcon: {
    position: "absolute",
    left: "95%",
  },
  icon: {
    color: "#000000",
    fontSize: 18,
  },
});
