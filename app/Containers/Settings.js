import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Link} from 'react-router-native';
import {useHistory} from 'react-router-dom';

import AppLayout from '../components/AppLayout';
import MenuItemNav from '../components/MenuItemNav';

const menus = [
  {
    title: 'Account',
    icon: require('../assets/images/account/account.png'),
    url: '/account',
  },
  {
    title: 'Privacy',
    icon: require('../assets/images/password2/password.png'),
    url: '/account',
  },
  {
    title: 'Security',
    icon: require('../assets/images/shield/shield.png'),
    url: '/account',
  },
  {
    title: 'Two - Step Verification',
    icon: require('../assets/images/search/search.png'),
    url: '/account',
  },
  {
    title: 'Change number',
    icon: require('../assets/images/phone/phone.png'),
    url: '/account',
  },
  {
    title: 'Request account info',
    icon: require('../assets/images/request/request.png'),
    url: '/account',
  },
  {
    title: 'Delete my account',
    icon: require('../assets/images/bin/bin.png'),
    url: '/account',
  },
];

export default Account = (props) => {
  const history = useHistory();
  return (
    <AppLayout>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => history.goBack()}
          style={styles.backButton}>
          <Image source={require('../assets/images/backArrow/backArrow.png')} />
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
      </View>
      <View>
        {menus.map((menu, key) => (
          <MenuItemNav
            key={key}
            title={menu.title}
            icon={menu.icon}
            url={menu.url}
          />
        ))}
      </View>
    </AppLayout>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#8CC33F',
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: '#fff',
    fontFamily: 'Poppins-Semibold',
    fontSize: 20,
    marginLeft: 15,
  },
});
