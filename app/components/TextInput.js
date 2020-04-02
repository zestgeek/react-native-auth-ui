import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';

export  default Login =(props) => {
  return (
        <View style={[styles.inputWrapper]}>
            <TextInput
            placeholder={props.placeholder}
            placeholderTextColor="#696969"
            style={styles.textInput}
            />
            {props.icon && 
                <Image
                source={props.icon}
                style={styles.icon}
                />
            }
        </View>
    );
  }
const styles = StyleSheet.create({

  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
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
    paddingTop:45
  },
  icon: {
    flex: 1,
    resizeMode: 'stretch',
    position: 'absolute',
    right: 0,
    bottom:20
  }
});
