import React from 'react';
import { SafeAreaView, StatusBar,TouchableWithoutFeedback, Keyboard } from 'react-native';



const AppLayout = (props) => {
 

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        {props.children}
        </SafeAreaView>
    </TouchableWithoutFeedback>
  )
};

export default AppLayout;