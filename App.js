
import Dashboard from './pages/dashboard.page';
import Toolbar from './components/toolbar.component';
import BottomMenu from './components/menu.component';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Toolbar />
        <Stack.Navigator>
          <Stack.Screen name="Dashboard" options={{ headerShown: false }} component={Dashboard} />
        </Stack.Navigator>
        <BottomMenu />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3e4448',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
