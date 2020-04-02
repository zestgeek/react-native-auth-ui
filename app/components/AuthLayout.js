import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const AuthLayout = (props) => (
      <View style={styles.container}>
        <View style={styles.headerTitle}>
          <Text style={styles.headerText}>{props.title}</Text>
        </View>
        <View style={styles.content}>
            {props.children}
        </View>
      </View>
    );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8CC33F',
  },
  headerTitle: {
    marginTop: 25,
    padding: 20,
    flex: 1,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins-Semibold',
    letterSpacing: 0,
  },
  content: {
    backgroundColor: '#fff',
    flex: 4,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  }
});

export default AuthLayout;