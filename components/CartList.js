import { Alert, StyleSheet, View } from "react-native";
import React from "react";
import cartStore from "../stores/cartStore";
import CartItem from "./CartItem";
import { observer } from "mobx-react";
import { Button, VStack } from "native-base";

const CartList = ({ navigation }) => {
  const cartList = cartStore.items.map((item) => (
    <CartItem item={item} key={item.product._id} navigation={navigation} />
  ));
  const handleCheckout = () => {
    cartStore.checkout();
  };
  return (
    <VStack>
      <View>{cartList}</View>
      <Button onPress={handleCheckout}>CheckOut</Button>
    </VStack>
  );
};

export default observer(CartList);

const styles = StyleSheet.create({});
