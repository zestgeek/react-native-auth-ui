import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Link} from 'react-router-native';

export default MenuItemNav = props => {
  return (
    <Link to={props.url} underlayColor="transparent">
      <View style={styles.menuItem}>
        <Image source={props.icon} />
        <Text style={styles.name}>{props.title}</Text>
        <Image
          style={styles.arrowIcon}
          source={require('../assets/images/nextArrow/nextArrow.png')}
        />
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#CBCBCB',
    alignItems: 'center',
  },
  name: {
    marginLeft: 40,
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    letterSpacing: 0,
    color: '#262626',
  },
  arrowIcon: {
    position: 'absolute',
    right: 20,
  },
});
