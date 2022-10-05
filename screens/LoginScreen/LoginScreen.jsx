import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

import React from "react";

const LoginScreen = () => {
  const Login=()=>Alert.alert("Login")
  return (
    <View style={styles.pannel}>
      <View>
        <Image
          source={require("../../assets/car.png")}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Name"
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#9a73ef"
          returnKeyType="go"
          secureTextEntry
          autoCorrect={false}
        />
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.SingUpButton} onPress={Login}>
          <Text style={styles.appButtonText}>Sing Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.LoginButton}>
          <Text style={styles.appButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pannel: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    marginTop: 25,
    borderRadius: 30,
    borderWidth: 1,
    padding: 10,
    width: 280,
  },
  LoginButton: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 20,
  },
  SingUpButton: {
    elevation: 8,
    backgroundColor: "#e74c3c",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 20,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  buttons: {
    flexDirection: "row",
  },
});

export default LoginScreen;
