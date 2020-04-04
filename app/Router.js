import React from 'react';
import {StyleSheet, Text, View, AppRegistry} from 'react-native';

import {NativeRouter, Route, Link} from 'react-router-native';
import AppLayout from './components/AppLayout';
import Login from './Containers/Login';
import Signup from './Containers/Signup';
import ResetPassword from './Containers/ResetPassword';
import ForgotPassword from './Containers/ForgotPassword';
import Account from './Containers/Account';

const Routes = () => (
  <AppLayout>
    <NativeRouter>
      <Route exact path="/" component={Account} />
      <Route path="/register" component={Signup} />
      <Route path="/resetpassword" component={ResetPassword} />
      <Route path="/forgotpassword" component={ForgotPassword} />
      <Route path="/account" component={Account} />
    </NativeRouter>
  </AppLayout>
);

export default Routes;
