import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet, Modal, Image, TextInput, SafeAreaView, ScrollView, ImageBackground } from 'react-native';
import CardSilder from 'react-native-cards-slider';
import Model from '../Model';
import FastImage from 'react-native-fast-image';
import Feather from 'react-native-vector-icons/Feather';
import { BottomSheet } from 'react-native-btr';

export default function HomeScreen({ navigation, online }) {
    const [status, setStatus] = useState('offline')
    const [visible, setVisible] = useState(false);
    const toggleBottomNavigationView = () => {

        setVisible(!visible);
        setTimeout(() => {
            setStatus('online');
        }, 2000);
    };


    const items = [
        { name: 'John Dsoe', type: 'Customer', age: 28, address: '123 Main St', price: 50 },
        { name: 'Jane Smith', type: 'Vendor', age: 35, address: '456 Elm St', price: 75 },
        { name: 'Bob Johnson', type: 'Customer', age: 42, address: '789 Oak St', price: 100 },
        { name: 'Alice Lee', type: 'Vendor', age: 29, address: '321 Maple St', price: 125 },
    ];

    const renderedItems = items.map((item, index) => (
        <View key={index} style={[styles.card, styles.elevation]}>
            <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold' }}>
                {item.name}
                <View >
                    <Image
                        source={require('../../images/bike.gif')}
                        style={{ marginLeft: 80, width: 48, height: 48 }}
                    />
                </View>
            </Text>
            <Text style={{ color: 'gray', fontSize: 16, marginTop: 8 }}>
                {item.type} - Age {item.age}
            </Text>
            <Text style={{ color: 'gray', fontSize: 16, marginTop: 8 }}>
                {item.address}
            </Text>
            <Text style={{ color: 'green', fontSize: 24, fontWeight: 'bold', marginTop: 16 }}>
                Price: ${item.price}
            </Text>
        </View>
    ));




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
                    {renderedItems}
                </CardSilder>}
                {status == 'offline' && <FastImage
                    // resizeMode={FastImage.resizeMode.contain}
                    style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
                    source={require('../../images/offline.gif')}
                />}
                {status == 'offline' && <>
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        // style={{color:'#7d5ffe'}}
                        onPress={toggleBottomNavigationView}
                    //on Press of the button bottom sheet will be visible

                    >
                        <Text
                            style={styles.buttonText}>
                            {status == 'offline' ? 'Online' : 'Offline'}</Text>
                    </TouchableOpacity>
                    <BottomSheet
                        visible={visible}
                        //setting the visibility state of the bottom shee
                        onBackButtonPress={toggleBottomNavigationView}
                        //Toggling the visibility state on the click of the back botton
                        onBackdropPress={toggleBottomNavigationView}
                    //Toggling the visibility state on the clicking out side of the sheet
                    >
                        {/*Bottom Sheet inner View*/}
                        <View style={styles.bottomNavigationView}>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}>
                                <Text
                                    style={{
                                        textAlign: 'left',
                                        padding: 20,
                                        fontSize: 20,
                                    }}>
                                    {status == 'online' ? ' Keep Riding Keep Chilling ' : 'Chal Nikal'}
                                    <FastImage
                                        resizeMode={FastImage.resizeMode.contain}
                                        style={{ width: 150, height: 140 }}
                                        source={require('../../images/bike.gif')}
                                    />

                                </Text>


                            </View>
                        </View>
                    </BottomSheet>


                </>}
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
    bottomNavigationView: {
        backgroundColor: '#fff',
        width: '100%',
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        backgroundColor: '#7d5ffe',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});
