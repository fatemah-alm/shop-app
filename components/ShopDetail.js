import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { baseURL } from "../stores/instance";
import ProductList from "./ProductList";

const ShopDetail = ({ route }) => {
  const { shop } = route.params;
  console.log(shop);
  return (
    <View>
      <Text>{shop.name}</Text>
      <Image source={{ uri: baseURL + shop.image }} style={styles.image} />
      <ProductList shop={shop} />
    </View>
  );
};

export default ShopDetail;

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
  },
});
