import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../assets/styles/globalStyles";

function Main() {
  return (
    <View>
      <Text style={[styles.text]}>Welcome to Aurora</Text>
    </View>
  );
}

export default Main;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
    fontFamily: "Montserrat-SemiBold",
  },
});
