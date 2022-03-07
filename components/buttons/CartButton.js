import { StyleSheet, View } from "react-native";
import React from "react";
import { observer } from "mobx-react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Badge, HStack } from "native-base";
import cartStore from "../../stores/cartStore";

const Cart = () => {
  const navigation = useNavigation();
  //   const badge = cartStore.totalQuantity();
  return (
    <HStack>
      <Badge>{cartStore.totalQuantity()}</Badge>

      <AntDesign
        name="shoppingcart"
        size={24}
        color="blue"
        style={{ margin: 10 }}
        onPress={() => navigation.navigate("cart")}
      />
    </HStack>
  );
};

export default observer(Cart);

const styles = StyleSheet.create({});
