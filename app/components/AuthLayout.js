import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Link} from 'react-router-native';

const AuthLayout = props => (
  <View style={styles.container}>
    <View style={styles.headerTitle}>
      <View style={{flexDirection: 'row'}}>
        {props.showBackButton ? (
          <Link to="/" style={styles.backButton} underlayColor="transparent">
            <Image
              source={require('../assets/images/backArrow/backArrow.png')}
              style={styles.icon}
            />
          </Link>
        ) : null}
        <Text style={[styles.headerText]}>{props.title}</Text>
      </View>
    </View>
    <View style={styles.content}>{props.children}</View>
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
    justifyContent: 'flex-start',
  },
  content: {
    backgroundColor: '#fff',
    flex: 4,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  icon: {
    width: 21,
    height: 18,
    justifyContent: 'flex-start',
    marginRight: 20,
  },
  backButton: {alignSelf: 'center', padding: 5, paddingLeft: 0},
});

export default AuthLayout;
