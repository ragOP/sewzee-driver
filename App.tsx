import { StyleSheet, Text, View } from 'react-native'
import { Platform } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, lightColors, createTheme, ThemeProvider } from '@rneui/themed';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const theme = createTheme({
  lightColors: {
    ...Platform.select({
      default: lightColors.platform.android,
      ios: lightColors.platform.ios,
    }),
  },
});


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <SafeAreaProvider>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})