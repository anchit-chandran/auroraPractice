import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { globalStyles } from "../assets/styles/globalStyles";
import { Button } from "react-native-paper";

function MainText() {
  return (
    <View>
      <Text style={[styles.text]}>Welcome to</Text>
      <View style={styles.auroraView}>
        <Image
          source={require("../assets/images/main-logo.png")}
          style={styles.logo}
        ></Image>
        <Text style={[styles.text]}>Aurora</Text>
      </View>
      <Text style={styles.strapline}>It's nice to meet you!</Text>
    </View>
  );
}

function Main() {
  return (
    <View style={styles.container.main}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <MainText />
      </View>
      <View style={{ width: "100%", marginBottom: 50 }}>
        <Button mode="contained-tonal" labelStyle={styles.buttonText} buttonColor="white">Let's get started</Button>
      </View>
    </View>
  );
}

export default Main;

const styles = StyleSheet.create({
  container: {
    main: {
      padding: 20,
      alignItems: "center",
      justifyContent: "center",
    },
  },
  text: {
    textAlign: "center",
    fontSize: 36,
    color: "white",
    fontFamily: "Montserrat-SemiBold",
  },
  strapline: {
    textAlign: "center",
    fontSize: 24,
    color: "white",
    fontFamily: "Montserrat-SemiBold",
    marginTop: 40,
  },
  auroraView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },
  buttonText: {
    fontFamily: "Montserrat-SemiBold",
  }

});
