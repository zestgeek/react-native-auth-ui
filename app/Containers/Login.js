import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Link, Route} from 'react-router-native';

import ForgotPassword from './ForgotPassword';

export default class Login extends Component {
  render() {
    return (
      
      <View style={styles.container}>
        <View style={styles.headerTitle}>
          <Text style={styles.headerText}>Log in</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={[styles.inputWrapper, styles.firstInput]}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="#696969"
                style={styles.textInput}
              />
              <Image
                source={require('../assets/images/mail/mail.png')}
                style={styles.icon}
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="#696969"
                style={styles.textInput}
              />
              <Image
                source={require('../assets/images/password/password.png')}
                style={styles.icon}
              />
            </View>
            <Link
              to="/forgotpassword"
              underlayColor="#f0f4f7"
              style={styles.navItemContainer}>
              <Text style={styles.navItemText}>Forgot password ?</Text>
            </Link>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Route exact path="/forgotpassword" component={ForgotPassword} />
      </View>
    );
  }
}

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
    flex: 3,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  form: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 72,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: '#696969',
    padding: 20,
    paddingLeft: 0,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#707070',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
  },
  firstInput: {
    marginBottom: 45,
  },
  icon: {
    flex: 1,
    resizeMode: 'stretch',
    position: 'absolute',
    right: 0,
  },
  navItemContainer: {
    marginTop: 35,
    marginBottom: 35,
    alignSelf: 'center',
  },
  navItemText: {
    fontSize: 18,
    color: '#696969',
    fontFamily: 'Poppins-Medium',
  },
  button: {
    backgroundColor: '#8CC33F',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    alignSelf: 'center',
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
  },
});
