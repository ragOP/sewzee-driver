import * as React from 'react';
import { Button, View,Text,TouchableOpacity,StyleSheet  } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import CardSilder from 'react-native-cards-slider';

function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <AdvancedCardCarousel/> */}
      
        {/* <Text style={{fontSize: 30, color: '#000', marginTop:40, marginLeft:20, fontWeight:'bold'}}>
          raghib
        </Text> */}
        <CardSilder style={{marginTop: 30}}>
          <View style={[styles.card, styles.elevation]}>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
              sA
            </Text>
          </View>
          <View style={[styles.card, styles.elevation]}>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
              A2
            </Text>
          </View>
          <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'white'}}>
            <Text style={{color: 'black', fontSize: 24, fontWeight: 'bold'}}>
              B
            </Text>
          </View>
          <View style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'teal'}}>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
             C
            </Text>
          </View>
          <TouchableOpacity  
           onPress={() => navigation.navigate('Notifications')}
          style={{height: 170, justifyContent:'center', alignItems:'center', backgroundColor: 'lightpink'}}>
            <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
              D
            </Text>
          </TouchableOpacity >
        </CardSilder>
      

    </View>
  );
}

function NotificationsScreen({ navigation }: { navigation: any }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
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
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    height: 170,
    justifyContent:'center',
     alignItems:'center',
    backgroundColor: 'teal',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
});