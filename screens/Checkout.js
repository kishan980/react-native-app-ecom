import {View,Text} from "react-native";
import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Layout from "../components/layout/Layout";

const Checkout = ({navigation})=>{

  const handleCOD =()=>{
    alert("You order has been place successfully")
  }

  const handleOnline =()=>{
    alert("You order has been place successfully")
    navigation.navigate("payment")
  }
  return(
    <Layout>

    <View style={styles.container}>
      <Text style={styles.heading}>
       Payment Options
      </Text>
      <Text style={styles.price}>Total Amount: 101$</Text>
      <View style={styles.card}>
        <Text style={styles.paymentHeading}>Select you Payment Mode</Text>
        <TouchableOpacity style={styles.paymentBtn} onPress={handleCOD}>
          <Text style={styles.paymentBtnText}>Cash On Devlivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentBtn} onPress={handleOnline}>
          <Text style={styles.paymentBtnText}>Online (CARD)</Text>
        </TouchableOpacity>
      </View>
    </View>
</Layout>
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    justifyContent:"center",
    height:"90%"
  },
  heading:{
    fontSize:25,
    fontWeight:"700",
    marginVertical:10
  },
  price:{
    fontSize:20,
    marginBottom:10,
    color:"gray"
  },
  card:{
    backgroundColor:"#ffffff",
    borderRadius:10,
    padding:30,
    marginVertical:10,
    width:"90%"
  },
  paymentHeading:{
    color:"gray",
    marginBottom:10
  },
  paymentBtn:{
    backgroundColor:"#000000",
    height:40,
    borderRadius:10,
    justifyContent:"center",
    marginVertical:10
  },
  paymentBtnText:{
    color:"#ffffff",
    textAlign:"center"

  }
})
export default Checkout