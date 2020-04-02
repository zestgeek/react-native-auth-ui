import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";
import AppLayout from './components/AppLayout'
import Login from './Containers/Login'
import Signup from './pages/Signup'
import ResetPassword from './pages/ResetPassword'
import ForgotPassword from './pages/ForgotPassword'
const Routes = () => (
    <AppLayout>
    <NativeRouter>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/resetpassword" component={ResetPassword} />
        <Route path="/forgotpassword" component={ForgotPassword} />
    </NativeRouter>
    </AppLayout>
);

export default Routes