import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { CartData } from "../data/Cart";
import PriceTable from "../components/cart/PriceTable";
import Layout from "../components/layout/Layout";
import CartItem from "../components/cart/CartItems";
const Cart = ({navigation}) => {
  const [cartItems, setCartItems] = useState(CartData);
  return (
    <Layout>

    <View>
      <Text style={cartItems?.length > 0 ? styled.heading : styled.headingRed}>
        {cartItems?.length > 0
          ? `You Have ${cartItems?.length} Item Left In Your Cart`
          : "OOPS Your Cart Is EMPTY"}
      </Text>
          {
            cartItems?.length >0 &&(
              <>
              <ScrollView>
                {
                  cartItems?.map((item) =>(
                    
                    <CartItem item={item} key={item._id}/>
                  ))
                }
              </ScrollView>
          <View>
            <PriceTable title={"Price"} price={999}/>
            <PriceTable title={"Tax"} price={1}/>
            <PriceTable title={"Shipping"} price={1}/>
            <View style={styled.garndTottal}>
              <PriceTable title={"GrandTotal"} price={100}/>
            </View>
            <TouchableOpacity style={styled.bntCheckout} onPress={()=>navigation.navigate("checkout")}>
              <Text style={styled.bntCheckoutText}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
          
              </>
          )
        }
    </View>
          </Layout>
  );
};

const styled = StyleSheet.create({
  heading: {
    textAlign: "center",
    color: "green",
  },
  headingRed: {
    textAlign: "center",
    color: "red",
  },
  garndTottal:{
    borderWidth:1,
    borderColor:"lightgray",
    backgroundColor:"#ffffff",
    padding:5,
    margin:5,
    marginHorizontal:20
  },
  bntCheckout:{
    marginTop:20,
    alignItems:"center",
    justifyContent:"center",
    height:40,
    backgroundColor:"#000000",
    width:"90%",
    marginHorizontal:20,
    borderRadius:20
  },
  bntCheckoutText:{
    color:"#ffffff",
    fontWeight:"bold",
    fontSize:14,

  }
});
export default Cart;
