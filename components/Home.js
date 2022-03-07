import React from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

const Home = ({ navigation }) => {
  const onPressLearnMore = () => {
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  };

  return (
    <Button
      onPress={() => {
        navigation.navigate("shops");
      }}
      title="Learn More"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  );
};

export default Home;
