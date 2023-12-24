import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CategoriesData } from "../../data/Categories.data";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
const Categories = () => {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {CategoriesData?.map((item) => (
          <View key={item._id}>
            <TouchableOpacity
              style={styles.categoryContainer}
              onPress={() => navigation.navigate(item.path)}
            >
              <AntDesign name={item.icon} style={styles.categoryIcon}></AntDesign>
              <Text style={styles.categoryName}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 5,
    flexDirection: "row",
  },
  categoryContainer: {
    padding: 15,
    justifyContent: "center",
    alignContent: "center",
  },
  categoryIcon: {
    fontSize: 28,
    verticalAlign: "top",
  },
  categoryName: {
    fontSize: 12,
  },
});
export default Categories;
