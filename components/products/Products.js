import React from "react"
import {View, Text} from "react-native"
import ProductsCard from "./ProductsCard"
import { ProductData } from "../../data/productsData"


const Products = ()=>{
  return(
    <View>
      {ProductData.map((pro)=>(
        <ProductsCard key={pro._id} pro={pro}/>
      ))}
    </View>
  )
}

export default Products