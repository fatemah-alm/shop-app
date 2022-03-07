import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { baseURL } from "../stores/instance";
import ProductList from "./ProductList";
import { Button, HStack } from "native-base";

const ShopItem = ({ shop, navigation }) => {
  console.log(shop);
  return (
    <HStack space={3} alignItems="center">
      <Text>{shop.name}</Text>
      <Image source={{ uri: baseURL + shop.image }} style={styles.image} />

      <Button onPress={() => navigation.navigate("shop-details", { shop })}>
        Click Me
      </Button>
    </HStack>
  );
};

export default ShopItem;

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
  },
});
