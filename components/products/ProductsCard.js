import React from "react"
import { View,Text ,StyleSheet,Image, TouchableOpacity} from "react-native"
import {useNavigation} from "@react-navigation/native"

const ProductsCard = ({pro})=>{
  const navigation =useNavigation()
  const {_id,name,price,description,category,imageUrl}=pro
  //more details button

  const moreDetailsButtonHandler = (id)=>{
    navigation.navigate('productDetails',{_id:id})
  }

  const addToCardHandler = ()=>{
    alert("Item added card")
  }
  return(
    <View>
      <View style={styles.container}>
        <Image source={{uri:imageUrl}} style={styles.cardImage}/>
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.cardDescription}>{description.substring(0,30)}...more</Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={()=>moreDetailsButtonHandler(_id)}>
             <Text style={styles.btnText}>Details</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonAddToCard} onPress={()=>addToCardHandler()}>
              <Text style={styles.btnText}>ADD TO CARD</Text>
            </TouchableOpacity>
        </View>
        <Text>{category}</Text>
        <Text>{price}</Text>
      </View>
    </View>
  )
}

const styles= StyleSheet.create(
  {
    container:{
      borderWidth:1,
      borderColor:"lightgray",
      marginVertical:5,
      marginHorizontal:8,
      width:"45%",
      padding:10,
      backgroundColor:"#ffffff",
      justifyContent:"center"
    },
    cardImage:{
      height:120,
      width:"100%",
      marginBottom:10
    },
    cardName:{
      fontSize:10,
      fontWeight:"bold",
      marginBottom:5
    },
    cardDescription:{
      fontSize:10,
      textAlign:"left"
    },
    buttonContainer:{
        marginTop:5,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
       
    },
    button:{
        backgroundColor:"#000000",
        height:23,
        width:69,
        borderRadius:5,
        justifyContent:"center",
    
      },

      buttonAddToCard:{
        backgroundColor:"orange",
        height:23,
        width:69,
        borderRadius:5,
        justifyContent:"center",
    
      },
      btnText:{
        color:"#ffffff",
        textAlign:"center",
        fontSize:10,
        fontWeight:"bold",
       
    }
  }
)
export default ProductsCard