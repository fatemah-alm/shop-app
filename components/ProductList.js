import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ shop }) => {
  const productList = shop.products.map((product) => (
    <ProductItem product={product} key={product._id} />
  ));

  return (
    <View>
      <Text>{productList}</Text>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
