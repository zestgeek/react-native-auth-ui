import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Link} from 'react-router-native';

import AuthLayout from '../components/AuthLayout';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

class Signup extends Component {
  render() {
    return (
      <AuthLayout title="Sign up" showBackButton>
        <ScrollView style={styles.form}>
          <TextInput
            placeholder="Name"
            icon={require('../assets/images/user/user.png')}
          />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            icon={require('../assets/images/mail/mail.png')}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            icon={require('../assets/images/password/password.png')}
          />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={true}
            icon={require('../assets/images/password/password.png')}
          />
          <Button title="Sign up" marginTop={45} />
        </ScrollView>
      </AuthLayout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  form: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 25,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
});

export default Signup;
