import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import CardSilder from 'react-native-cards-slider';
import Model from '../Model';

export default function HomeScreen({ navigation,online }) {
    console.log('jome',online);
   
     


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Model/>
            <CardSilder style={{ marginTop: 30 }}>
                <View style={[styles.card, styles.elevation]}>
                    <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}>
                        raghib
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        backgroundColor: 'lightblue',
        padding: 12,
        margin: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      },
      bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
      },
   
    content: {
        fontSize: 16,
        marginBottom: 20,
    },
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