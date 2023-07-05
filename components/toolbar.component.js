import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const Toolbar = () => {
  const windowWidth = Dimensions.get('window').width;
  const isMobileDevice = windowWidth < 768;
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.logo} />
        <Text style={styles.appName}>SOCCER SENSE APP</Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity style={styles.menuItem}>
            <FontAwesomeIcon icon={faCircleInfo} color="#b2b4b6" size={20} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 12,
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#b2b4b6',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
  appName: {
    marginLeft: 10,
    color: '#b2b4b6',
    fontSize: 18,
    fontWeight: 'bold',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24,
    color: '#b2b4b6',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  menuItemText: {
    fontSize: 13,
    fontWeight: 'bold'
  },
  icon: {
    marginRight: 8,
  },
});

export default Toolbar;

