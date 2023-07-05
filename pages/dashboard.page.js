import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Image, Animated, Text } from 'react-native';

const Dashboard = () => {
  const windowWidth = Dimensions.get('window').width;
  const isMobileDevice = windowWidth < 768;


const content = () => {
  if (isMobileDevice) {
      return ( 
          <>
          
          </>
      );
  } else {
      return(
          <> 
           
          </>
      );
  }
}


  return (
    <View style={styles.mainContainer}>

    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#041014'
  }
});

export default Dashboard;
