import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Home from "./components/Home";
import ShopList from "./components/ShopList";
import { NativeBaseProvider, Text } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShopDetail from "./components/ShopDetail";
import CartList from "./components/CartList";
import CartButton from "./components/buttons/CartButton";
// import { create } from "@react-navigation/stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen
            name="shops"
            component={ShopList}
            options={{ headerRight: () => <CartButton /> }}
          />
          <Stack.Screen
            name="shop-details"
            component={ShopDetail}
            options={{ headerRight: () => <CartButton /> }}
          />
          <Stack.Screen name="cart" component={CartList} />

          {/* <StatusBar style="auto" /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
