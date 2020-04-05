import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AuthLayout from '../components/AuthLayout';
import {Link, Route} from 'react-router-native';
import {useHistory} from 'react-router-dom';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

export default Signup = propps => {
  let history = useHistory();
  return (
    <AuthLayout title="Sign Up" showBackButton>
      <View style={styles.form}>
        <TextInput
          placeholder="Name"
          icon={require('../assets/images/mail/mail.png')}
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
        <Button title="Sign Up" />
        <Button title="Log In" onPress={() => history.push('/')} />
      </View>
    </AuthLayout>
  );
};
const styles = StyleSheet.create({
  form: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 25,
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
});
