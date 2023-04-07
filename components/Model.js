// Example of Bottom Sheet in React Native
// https://aboutreact.com/react-native-bottom-sheet/

// import React in our code
import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import FastImage from 'react-native-fast-image';
//import basic react native components
import { BottomSheet } from 'react-native-btr';


//import to show social icons
// import { SocialIcon } from 'react-native-elements';

const Model = () => {
    const [visible, setVisible] = useState(false);
    const [status, setStatus] = useState('online')


    const toggleBottomNavigationView = () => {
        //Toggling the visibility state of the bottom sheet
        setVisible(!visible);
    };

    return (
        <>

            <TouchableOpacity
                style={styles.buttonContainer}
                // style={{color:'#7d5ffe'}}
                onPress={toggleBottomNavigationView}
            //on Press of the button bottom sheet will be visible

            >
                <Text
                    style={styles.buttonText}>
                    {status == 'online' ? 'Online' : 'Offline'}</Text>
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
                                textAlign: 'center',
                                padding: 20,
                                fontSize: 20,
                            }}>
                            {status == 'online' ? ' Keep Riding Keep Chilling ' : 'Chal Nikal'}
                            <FastImage
                                resizeMode={FastImage.resizeMode.contain}
                                style={{ width: 150, height: 140 }}
                                source={require('../images/bike.gif')}
                            />

                        </Text>


                    </View>
                </View>
            </BottomSheet>

        </>
    );
};

export default Model;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
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