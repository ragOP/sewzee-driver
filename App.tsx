import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Details from './components/Details';
import Payment from './components/Payment';
import HomeScreen from './components/Screens/HomeScreen';
import Summary from './components/Screens/Summary';
import { Switch } from 'react-native';

const Drawer = createDrawerNavigator();

export default function App({ navigation }: { navigation: any }) {
  const [online, setOnline] = useState(false);

  const toggleSwitch = () => {
    console.log('online', online);
    setOnline(!online);
  };
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: 'white',
            width: 240,


          },

        }}
        initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <DrawerItem
                label="Toggle Online"
                icon={() => (
                  <Switch value={online} onValueChange={toggleSwitch} style={styles.switch} />
                )}
                onPress={() => { }}
              />
            ),
            screenProps: { online: 'online' },
          })}
        />



        <Drawer.Screen name="Summary" component={Summary} />
        <Drawer.Screen name="Details" component={Details} />
        <Drawer.Screen name="Payment" component={Payment}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({

  switch: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], // increases the size of the switch
    marginLeft: 180, // adds a margin of 10px
  },
});