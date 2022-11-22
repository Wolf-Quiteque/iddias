import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { Component, useState } from "react";
import { Register } from "../api/authenticate";

import "./signIn.css";

const SignUpScreen = ({ navigation }) => {
  const [loading, setloading] = useState(false);
  var user = {};

  const login = async () => {
    setloading(true);
    const res = await Register(user);
    if (res == "created successfully!") {
      navigation.navigate("Login");
    } else {
      alert("Tente novamente");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require("../../assets/img/logo@2x.png")}
        />
      </View>

      <View style={styles.signInView}>
        <Text style={styles.signInText}>Create an Account</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="  name"
          autoCapitalize="none"
          onChangeText={(text) => (user.name = text)}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="  phone number"
          autoCapitalize="none"
          onChangeText={(text) => (user.phone = text)}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="   email"
          autoCapitalize="none"
          onChangeText={(text) => (user.email = text)}
        />

        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="  password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(text) => (user.password = text)}
        />
      </View>

      <View style={styles.btnView}>
        {loading ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : (
          <>
            {" "}
            <TouchableOpacity
              style={styles.submitButton}
              onPress={() => login(state.email, state.password)}
            >
              <Text style={styles.submitButtonText}> Sign Up </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ButtonBack}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={styles.submitButtonText}> Sign In </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  imgContainer: {
    alignItems: "center",
  },
  img: {
    justifyContent: "center",
    height: 71,
    width: 301,
    marginTop: 32,
  },

  signInView: { marginTop: 42, alignItems: "center" },
  signInText: {
    color: " black",
    fontSize: 26,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 30,
    position: "absolute",

    top: 40,
    whiteSpace: "nowrap",
  },
  inputView: {
    marginTop: 130,
    alignItems: "center",
  },
  input: {
    alignItems: "flex-end",
    backgroundIcolor: "var(--white)",
    border: "1px solid",
    borderColor: "var(--black)",
    borderRadius: 10,
    display: "flex",
    height: 48,
    minWidth: 279,
    marginBottom: 15,
  },
  textView: {
    alignItems: "center",
    marginTop: 50,
  },
  text: {
    marginBottom: 2,
    fontWeight: "500",
  },
  btnView: {
    alignItems: "center",
    alignContent: "center",
  },
  submitButton: {
    alignContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    backgroundColor: "#21ae9c",
    borderRadius: 10,
    height: 48,
    marginRight: 1.0,
    marginTop: 57,
    minWidth: 302,
  },
  ButtonBack: {
    alignContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    backgroundColor: "#62b581",
    borderRadius: 10,
    height: 48,
    marginRight: 1.0,
    marginTop: 10,
    minWidth: 302,
  },
  submitButtonText: {
    color: "white",
    marginTop: 10,
    fontSize: 17,
    fontWeight: "600",
  },
});
