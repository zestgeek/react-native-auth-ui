import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ActionSheetIOS,
} from 'react-native';
import {Link, Route} from 'react-router-native';
import {useHistory} from 'react-router-dom';

import AppLayout from '../components/AppLayout';
import ChatItem from '../components/ChatItem';
import {withTheme} from '../core/themeProvider';

const chats = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    image: require('../assets/images/user.jpg'),
    time: '03.00 AM',
    count: 0,
  },
  {
    id: 2,
    firstName: 'John',
    lastName: 'Doe',
    image: require('../assets/images/user.jpg'),
    time: '03.00 AM',
    count: 1,
  },
  {
    id: 3,
    firstName: 'John',
    lastName: 'Doe',
    image: require('../assets/images/user.jpg'),
    time: '03.00 AM',
    count: 0,
  },
  {
    id: 4,
    firstName: 'John',
    lastName: 'Doe',
    image: require('../assets/images/user.jpg'),
    time: '03.00 AM',
    count: 0,
  },
  {
    id: 5,
    firstName: 'John',
    lastName: 'Doe',
    image: require('../assets/images/user.jpg'),
    time: '03.00 AM',
    count: 2,
  },
  {
    id: 6,
    firstName: 'John',
    lastName: 'Doe',
    image: require('../assets/images/user.jpg'),
    time: '03.00 AM',
    count: 0,
  },
  {
    id: 7,
    firstName: 'John',
    lastName: 'Doe',
    image: require('../assets/images/user.jpg'),
    time: '03.00 AM',
    count: 0,
  },
  {
    id: 8,
    firstName: 'John',
    lastName: 'Doe',
    image: require('../assets/images/user.jpg'),
    time: '03.00 AM',
    count: 0,
  },
  {
    id: 9,
    firstName: 'John',
    lastName: 'Doe',
    image: require('../assets/images/user.jpg'),
    time: '03.00 AM',
    count: 0,
  },
  {
    id: 10,
    firstName: 'John',
    lastName: 'Doe',
    image: require('../assets/images/user.jpg'),
    time: '03.00 AM',
    count: 0,
  },
];
const Messages = (props) => {
  const {theme} = props;
  let history = useHistory();
  const [activeTab, setActiveTab] = useState(1);

  onActive = (activeTab) => {
    setActiveTab(activeTab);
  };

  const onPressMenu = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Settings'],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          history.push('/settings');
        } else if (buttonIndex === 2) {
          setResult('🔮');
        }
      },
    );
  return (
    <AppLayout>
      <View style={[styles.header, {backgroundColor: theme.backgroundColor}]}>
        <Text style={styles.title}>Messages</Text>
        <View style={styles.iconGroup}>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/searchIcon/searchIcon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.moreIcon} onPress={onPressMenu}>
            <Image source={require('../assets/images/more/more.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <FlatList
          data={chats}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <ChatItem
              firstName={item.firstName}
              lastName={item.lastName}
              image={item.image}
              message={item.message}
              time={item.time}
              count={item.count}
            />
          )}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.tab, activeTab === 1 ? styles.active : null]}
          onPress={() => onActive(1)}>
          <Image source={require('../assets/images/message/message.png')} />
          <Text style={styles.tabTitle}>Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.9}
          style={[styles.tab, activeTab === 2 ? styles.active : null]}
          onPress={() => onActive(2)}>
          <Image source={require('../assets/images/contacts/contacts.png')} />
          <Text style={styles.tabTitle}>Contacts</Text>
        </TouchableOpacity>
      </View>
    </AppLayout>
  );
};

export default withTheme(Messages);

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontFamily: 'Poppins-Semibold',
    fontSize: 20,
    marginLeft: 15,
  },
  iconGroup: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreIcon: {
    marginLeft: 15,
    paddingLeft: 10,
  },
  content: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tab: {
    backgroundColor: '#8CC33F',
    padding: 20,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  tabTitle: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Poppins-Semibold',
    fontSize: 20,
    marginLeft: 10,
  },
  active: {
    backgroundColor: '#79AD2F',
  },
});
