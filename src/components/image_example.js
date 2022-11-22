import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
const ImagesExample = () => (
  <View style={styles.container}>
    <Image
      style={styles.img}
      source={require("../../assets/img/logo@2x.png")}
    />
  </View>
);
export default ImagesExample;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: 71,
    width: 301,
  },
  img: {
    height: 71,
    width: 301,
  },
});
