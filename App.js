import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContent, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Details from './components/Details';
import Payment from './components/Payment';
import HomeScreen from './components/Screens/HomeScreen';
import Summary from './components/Screens/Summary';
import { Switch } from 'react-native';
import CustomDrawer from './components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Notification from './components/Screens/Notification';

const Drawer = createDrawerNavigator();
// const CustomDefaultTheme = {
//   ...NavigationDefaultTheme,
//   ...PaperDefaultTheme,
//   colors: {
//     ...NavigationDefaultTheme.colors,
//     ...PaperDefaultTheme.colors,
//     background: '#ffffff',
//     text: '#333333'
//   }
// }

// const CustomDarkTheme = {
//   ...NavigationDarkTheme,
//   ...PaperDarkTheme,
//   colors: {
//     ...NavigationDarkTheme.colors,
//     ...PaperDarkTheme.colors,
//     background: '#333333',
//     text: '#ffffff'
//   }
// }

export default function App({ navigation }) {
  const [online, setOnline] = useState('false');

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleSwitch = () => {
    setOnline(!online);
  };

  return (
    <NavigationContainer >
       <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        // drawerLabelStyle: {
        //   marginLeft: -25,
        //   fontFamily: 'Roboto-Medium',
        //   fontSize: 15,
        // },
      }}>

        <Drawer.Screen
          name="Home" component={HomeScreen}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        
        

      />
        <Drawer.Screen name="Summary" component={Summary} />
        <Drawer.Screen name="Details" component={Details} />
        <Drawer.Screen name="Payment" component={Payment} />
        <Drawer.Screen name="Notification" component={Notification} />
      </Drawer.Navigator>
    </NavigationContainer >
  );
}
const styles = StyleSheet.create({

  switch: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], // increases the size of the switch
    marginLeft: 180, // adds a margin of 10px
  },
});