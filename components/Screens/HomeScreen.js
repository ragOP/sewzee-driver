import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CardSilder from 'react-native-cards-slider';

export default function HomeScreen({ navigation }) {


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>



            <CardSilder style={{ marginTop: 30 }}>
                <View style={[styles.card, styles.elevation]}>
                    <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}>
                        sA
                    </Text>
                </View>
                <View style={[styles.card, styles.elevation]}>
                    <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}>
                        A2
                    </Text>
                </View>
                <View style={{ height: 170, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                    <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}>
                        B
                    </Text>
                </View>
                <View style={{ height: 170, justifyContent: 'center', alignItems: 'center', backgroundColor: 'teal' }}>
                    <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
                        C
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Details')}
                    style={{ height: 170, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightpink' }}>
                    <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>
                        D
                    </Text>
                </TouchableOpacity >
            </CardSilder>


        </View>
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
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
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
    switch: {
      transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], // increases the size of the switch
      marginLeft: 180, // adds a margin of 10px
    },
  });