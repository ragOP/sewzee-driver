import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet, Modal, TextInput, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import CardSilder from 'react-native-cards-slider';
import Model from '../Model';
import FastImage from 'react-native-fast-image';
import Feather from 'react-native-vector-icons/Feather';

export default function HomeScreen({ navigation, online }) {
    const [status, setStatus] = useState('online')







    return (
        <>

            <View style={{ backgroundColor: '#8200d6', padding: 20 }}>
                <ScrollView >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            // marginBottom: 20,
                        }}>
                        <Text style={{ fontSize: 18, fontFamily: 'Roboto-Medium' }}>
                            Hello Raghib Najmi
                        </Text>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <ImageBackground
                                source={require('../../images/user-profile.jpg')}
                                style={{ width: 35, height: 35 }}
                                imageStyle={{ borderRadius: 25 }}
                            />
                        </TouchableOpacity>
                    </View>






                </ScrollView>

            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                {status == 'online' && <CardSilder style={{ marginTop: 5 }}>
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
                </CardSilder>}
                {status == 'offline' && <FastImage
                    // resizeMode={FastImage.resizeMode.contain}
                    style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
                    source={require('../../images/offline.gif')}
                />}
                {status == 'offline' && <Model />}
            </View>
        </>
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
