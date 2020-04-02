import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-native";

const Signup = () => (
    <View style={styles.container}>
    <Text style={styles.header}>Signup Page</Text>
      <View style={styles.nav}>
        <Link to="/forgotpassword" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Go To Forgot Password</Text>
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

export default Signup