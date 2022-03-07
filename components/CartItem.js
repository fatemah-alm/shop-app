import { StyleSheet, Text, Image } from "react-native";
import React from "react";
import { baseURL } from "../stores/instance";
import { Button, HStack, VStack } from "native-base";
import cartStore from "../stores/cartStore";

const CartItem = ({ item, navigation }) => {
  const totalPrice = item.product.price * item.quantity;
  console.log(item.product.image);

  const deleteItem = () => {
    cartStore.removeItemFromCart(item.product._id);
  };
  return (
    <HStack>
      <Button onPress={deleteItem}>remove</Button>

      <VStack space={3} alignItems="center">
        <Text>{item.name}</Text>
        {item.product.image.includes("http") ? (
          <Image source={{ uri: item.product.image }} style={styles.image} />
        ) : (
          <Image
            source={{ uri: "http://localhost:8088/" + item.product.image }}
            style={styles.image}
          />
        )}

        <Text> Price: {item.product.price} KD</Text>
        <Text> quantity: {item.quantity}</Text>
        <Text>Total price ={totalPrice} KD </Text>
      </VStack>
    </HStack>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
  },
});
