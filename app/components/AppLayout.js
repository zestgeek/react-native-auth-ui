import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';



const AppLayout = (props) => {
 

  return (
    <SafeAreaView>
      <StatusBar />
      {props.children}
    </SafeAreaView>
  )
};

export default AppLayout;