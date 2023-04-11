import { StyleSheet, Text, View, Button, Switch, Image, ScrollView, TextInput, ImageBackground, Alert } from 'react-native'
import React, { useState } from 'react'
import { Divider } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SwipeButton from 'rn-swipe-button';
import FastImage from 'react-native-fast-image';
import MapView from 'react-native-maps';


const Details = ({ navigation }) => {
    const [customerName, setCustomerName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [chestMeasurement, setChestMeasurement] = useState('');
    const [waistMeasurement, setWaistMeasurement] = useState('');

    const defaultStatusMessage = 'swipe status appears here';
    const [swipeStatusMessage, setSwipeStatusMessage] = useState(
        defaultStatusMessage,
    );

    setInterval(() => setSwipeStatusMessage(defaultStatusMessage), 5000);

    const [checked, setChecked] = useState(false);
    const handleFormSubmit = () => {
        // Perform validation and processing of measurement data
        // Send the data to your backend API or perform any other necessary actions
        // based on your app's requirements
    };

    const toggleSwitch = () => {
        setChecked(!checked);
    };
    const handle = ({ navigation }) => {
        navigation.navigate('Notification')
    }

    const [accepted, setAccepted] = useState(false);

    const handleAccept = () => {
        // Set the accepted state to true and navigate to the map screen
        setAccepted(true);
    };

    const handleReject = () => {
        // Show an alert to handle the rejection
        Alert.alert('Order Rejected', 'You have rejected the order.', [{ text: 'OK' }]);

        setTimeout(() => {
            navigation.goBack()
        }, 1000);

        const [customerName, setCustomerName] = useState('');
        const [contactNumber, setContactNumber] = useState('');
        const [chestMeasurement, setChestMeasurement] = useState('');
        const [waistMeasurement, setWaistMeasurement] = useState('');
        // Add more state variables for other measurements as needed

        // Function to handle form submission
        const handleFormSubmit = () => {
            // Perform validation and processing of measurement data
            // Send the data to your backend API or perform any other necessary actions
            // based on your app's requirements
        };
    };
    return (
        <>
       
            <View style={{ backgroundColor: '#8200d6', padding: 20 }}> 
            {/* //topBar */}
                
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            // marginBottom: 20,
                        }}>

                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <ImageBackground
                                source={require('../images/user-profile.jpg')}
                                style={{ width: 35, height: 35 }}
                                imageStyle={{ borderRadius: 25 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handle}>
                            <FastImage
                                source={require('../images/notis.gif')}
                                style={{ width: 45, height: 35 }}
                                imageStyle={{ borderRadius: 25 }}
                            />
                        </TouchableOpacity>
                    </View>







              

            </View>

            {/* topbarENds */}
            <View style={{ marginTop: 10, marginLeft: 30, padding: 40, height: 570, width: 300, backgroundColor: 'white' }}>
                <ScrollView>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
                    {`Order #69`

                    }
                </Text>
                <Divider inset={true} insetType="right" />
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
                    {`Raghib Najmi`

                    }
                </Text>
                <Divider inset={true} insetType="right" />
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
                    {`Market/Laundary/Tailor`

                    }
                </Text>

                <Divider inset={true} insetType="right" />
                <TouchableOpacity style={{ justifyContent: 'flex-end', }}  >

                    <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
                        {`Drop off`

                        }
                    </Text>
                    <Text style={{ color: 'grey', fontSize: 8, }}>
                        {`18 raza manzil ye chowk wo chowk pata nahi`}
                    </Text>
                </TouchableOpacity>






                <Divider inset={true} insetType="right" />
                <TouchableOpacity>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
                        {`Price 300 `

                        }
                    </Text>

                </TouchableOpacity>
                <Divider inset={true} insetType="right" />

                
                <TextInput
                style={styles.input}
                placeholder="Customer Name"
                value={customerName}
                onChangeText={setCustomerName}
            />
            <TextInput
                style={styles.input}
                placeholder="Contact Number"
                value={contactNumber}
                onChangeText={setContactNumber}
                keyboardType="phone-pad"
            />
            <TextInput
                style={styles.input}
                placeholder="Chest Measurement"
                value={chestMeasurement}
                onChangeText={setChestMeasurement}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Waist Measurement"
                value={waistMeasurement}
                onChangeText={setWaistMeasurement}
                keyboardType="numeric"
            />
            {/* Add more TextInput components for other measurements as needed */}
            <Button title="Submit" onPress={handleFormSubmit} />
            <View style={{ flex: 1 }}>
                    {accepted ? (
                        <MapView
                            style={{ flex: 1 }}
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        />
                    ) : (
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text>Order Details:</Text>
                            {/* Render the order details here */}
                            <Button title="Accept" onPress={handleAccept} />
                            <Button title="Reject" onPress={handleReject} />
                        </View>
                    )}
                </View>
            </ScrollView>
            </View>
         
            
        </>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    input: {
      marginBottom: 12,
      padding: 12,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 4,
    },
  });