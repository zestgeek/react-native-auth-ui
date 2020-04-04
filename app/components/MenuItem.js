import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default MenuItem = props => {
  const menuStyles = [styles.menu];
  if (props.firstItem) menuStyles.push(styles.firstItem);

  return (
    <View style={menuStyles}>
      <Text style={styles.menuItem}>{props.title}</Text>
      <TouchableOpacity>
        <Image
          source={require('../assets/images/edit/edit.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  firstItem: {
    borderTopWidth: 1,
  },
  menu: {
    borderBottomWidth: 1,
    borderColor: '#CBCBCB',
    padding: 20,
    flexDirection: 'row',
  },
  menuItem: {
    color: '#262626',
    fontFamily: 'Poppins-Medium',
    letterSpacing: 0,
    alignSelf: 'flex-start',
    flex: 1,
  },
  icon: {
    alignSelf: 'flex-end',
  },
});
