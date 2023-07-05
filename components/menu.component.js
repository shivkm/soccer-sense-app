import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faListUl, faHeart } from '@fortawesome/free-solid-svg-icons';

const BottomMenu = () => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState('ItemListPage');

  const handleMenuItemPress = (screenName) => {
    setSelectedItem(screenName);
    navigation.navigate(screenName);
  };

  const renderMenuItems = () => {
    const menuItems = [
      { screenName: 'UpcomingMatches', label: 'MATCHES', icon: faListUl },
      { screenName: 'Dashboard', label: 'DASHBOARD', icon: faHouse },
      { screenName: 'AboutUs', label: 'FAVORITE', icon: faHeart },
    ];

    return menuItems.map(({ screenName, label, icon }) => (
      <TouchableOpacity
        key={screenName}
        style={[styles.item, selectedItem === screenName && styles.selectedItem]}
        onPress={() => handleMenuItemPress(screenName)}
      >
        <FontAwesomeIcon icon={icon} color="#b2b4b6" size={18} style={styles.icon} />
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.menuItems}>{renderMenuItems()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    width: '100%',
    paddingTop: 8,
  },
  menuItems: {
    flexDirection: 'row',
    borderTopWidth: 2,
    borderTopColor: '#ccc',
    width: '100%',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
  },
  selectedItem: {
    backgroundColor: '#b2b4b6',
    borderBottomWidth: 2,
    borderBottomColor: '#b2b4b6',
  },
  label: {
    fontSize: 12,
    marginTop: 8,
    fontFamily: 'Belanosima',
    fontWeight: 'bold',
    color: '#b2b4b6',
    textAlign: 'center',
  },
  icon: {
    marginRight: 8,
  },
});

export default BottomMenu;
