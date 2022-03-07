import { StyleSheet, Text, View } from "react-native";
import React from "react";
import shopStore from "../stores/shopStore";
import ShopItem from "./ShopItem";

const ShopList = ({ navigation }) => {
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} key={shop._id} navigation={navigation} />
  ));
  return <View style={styles.list}>{shopList}</View>;
};

export default ShopList;

const styles = StyleSheet.create({
  list: {
    margin: 15,
  },
});
