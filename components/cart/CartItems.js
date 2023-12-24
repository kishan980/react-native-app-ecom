import {View,Text, StyleSheet, Image, TouchableOpacity} from "react-native"
import React, { useState } from "react"

const CartItem = ({item})=>{

    const [qtyAdd, setQtyAdd] = useState(1);
   
  const handlAddQuantity = () => {
    if (qtyAdd === 10) return alert("You cany add more then 10 quantity");
    setQtyAdd((pre) => pre + 1);
  };

  const handlRemoveQuantity = () => {
    if (qtyAdd <= 1) return;
    setQtyAdd((pre) => pre - 1);
  };
  return(
    <View style={styles.container}>
      <Image source={{uri:item?.imageUrl}} style={styles.imageTag}/>
      <View>
      <Text style={styles.name}>{item?.name}</Text>
      <Text style={styles.name}>{item?.price}$</Text>

      </View>

      <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.btnQty}
                onPress={handlRemoveQuantity}
              >
                <Text style={styles.text}>-</Text>
              </TouchableOpacity>
              <Text>{qtyAdd}</Text>
              <TouchableOpacity
                style={styles.btnQty}
                onPress={handlAddQuantity}
              >
                <Text style={styles.text}>+</Text>
              </TouchableOpacity>
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    margin:10,
    backgroundColor:"#ffffff",
    borderRadius:10,
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center"
  },
  imageTag:{
    height:50,
    width:50,
    resizeMode:"contain"
  },
  name:{
    fontSize:10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  btnCart: {
    width: 180,
    backgroundColor: "#000000",
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
  },
  btnCartText: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  btnQty: {
    backgroundColor: "lightgray",
    width: 40,
    alignItems: "center",
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
  }
})
export default CartItem