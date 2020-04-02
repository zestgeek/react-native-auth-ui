import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

const Login = () => (
    <View style={styles.container}>
    <Text style={styles.header}>Login Page</Text>
      <View style={styles.nav}>
        <Link to="/signup" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Go To Signup</Text>
        </Link>
      </View>
    </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  }
});

export default Login