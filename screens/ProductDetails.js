import { Text, View, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { ProductData } from "../data/productsData";
import { TouchableOpacity } from "react-native";
import { Touchable } from "react-native";
import Layout from "../components/layout/Layout";
const ProductDetails = ({ route }) => {
  const { params } = route;
  const [productDetailsData, setProductDetailsData] = useState({});
  const [qtyAdd, setQtyAdd] = useState(1);
  useEffect(() => {
    const getProduct = ProductData.find((proData) => {
      return proData._id === params._id;
    });
    setProductDetailsData(getProduct);
  }, [params?._id]);

  const handlAddQuantity = () => {
    if (qtyAdd === 10) return alert("You cany add more then 10 quantity");
    setQtyAdd((pre) => pre + 1);
  };

  const handlRemoveQuantity = () => {
    if (qtyAdd <= 1) return;
    setQtyAdd((pre) => pre - 1);
  };
  return (
    <Layout>
      <View>
        {/* 
      <Text>
        Product Details
        {JSON.stringify(productDetailsData,null,4)}
      </Text> */}

        <Image
          source={{ uri: productDetailsData?.imageUrl }}
          style={styles.containerImage}
        />
        <View style={styles.container}>
          <Text style={styles.nameTitle}>{productDetailsData?.name}</Text>
          <Text style={styles.nameTitle}>{productDetailsData?.price}$</Text>
          <Text style={styles.descrption}>
            {productDetailsData?.description}
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.btnCart}
              onPress={() => alert(`${qtyAdd} item are added to cart`)}
              disabled={productDetailsData.quantity <=0 }
            >
              <Text style={styles.btnCartText}>
                {productDetailsData?.quantity > 0
                  ? "ADD TO CART"
                  : "OUT OF STOCK"}
              </Text>
            </TouchableOpacity>
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
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  containerImage: {
    height: 300,
    width: "100%",
  },
  container: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
  nameTitle: {
    fontSize: 18,
    textAlign: "left",
  },
  descrption: {
    fontSize: 12,
    textTransform: "uppercase",
    textAlign: "justify",
    marginVertical: 10,
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
  },
});
export default ProductDetails;
