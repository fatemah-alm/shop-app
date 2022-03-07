import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { baseURL } from "../stores/instance";
import NumericInput from "react-native-numeric-input";
import { Button } from "native-base";
import cartStore from "../stores/cartStore";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    const newItem = { product, quantity };
    console.log(quantity);

    cartStore.addItemToCart(newItem);
  };

  return (
    <View>
      <Text style={styles.text}>{product.name}</Text>
      <Image source={{ uri: baseURL + product.image }} style={styles.image} />
      <NumericInput
        value={quantity}
        onChange={(value) => setQuantity({ value })}
        totalWidth={240}
        totalHeight={50}
        iconSize={25}
        step={1.5}
        valueType="real"
        rounded
        textColor="white"
        iconStyle={{ color: "white" }}
        rightButtonBackgroundColor="#EA3788"
        leftButtonBackgroundColor="#E56B70"
      />
      <Button onPress={handleAdd}>Add</Button>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
  },
  text: {
    width: 60,
    height: 60,
  },
});
