import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import {withTheme} from '../core/themeProvider';

const ChatItem = (props) => {
  const {theme} = props;

  return (
    <TouchableOpacity style={styles.wrapper} activeOpacity={0.7}>
      <Image style={styles.image} source={props.image} />
      <View style={styles.content}>
        <Text style={styles.name}>
          {props.firstName + ' ' + props.lastName}
        </Text>
        <Text style={styles.message}>How was your last tour?</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.time}>03.00 AM</Text>
        {props.count ? (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{props.count}</Text>
          </View>
        ) : (
          <View style={styles.tick}>
            <Image source={require('../assets/images/tick/tick.png')} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
export default withTheme(ChatItem);
const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    borderBottomWidth: 1,
    borderColor: '#CBCBCB',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  content: {
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#262626',
  },
  message: {
    fontSize: 'Poppins-Medium',
    fontSize: 14,
    color: '#808080',
  },
  details: {
    alignSelf: 'center',
  },
  time: {
    fontFamily: 'Poppins-Medium',
    color: '#808080',
  },
  badge: {
    backgroundColor: '#8CC33F',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  badgeText: {
    color: '#fff',
  },
  tick: {
    marginTop: 8,
  },
});
