import { StyleSheet, Text, View, Button, Switch, Image,ScrollView,ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { Divider } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SwipeButton from 'rn-swipe-button';
import FastImage from 'react-native-fast-image';


const Details = ({navigation}) => {

    const defaultStatusMessage = 'swipe status appears here';
    const [swipeStatusMessage, setSwipeStatusMessage] = useState(
        defaultStatusMessage,
    );

    setInterval(() => setSwipeStatusMessage(defaultStatusMessage), 5000);
    const handleSuccess = () => {

        console.log('User swiped to the right!')

    }
    const [checked, setChecked] = useState(false);

    const toggleSwitch = () => {
        setChecked(!checked);
    };
    const handle = ({ navigation }) => {
        navigation.navigate('Notification')
    }

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
            






        </ScrollView>

    </View>
    <View style={{ marginTop: 10, marginLeft: 30, padding: 30, height: 370, width: 300, backgroundColor: 'white' }}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
                {`Order #69ss69`

                }
            </Text>
            <Text style={{ color: 'grey', fontSize: 8, }}>
                {`26 May 1999 02:30 PM`}
            </Text>
            <Divider inset={true} insetType="right" />
            <TouchableOpacity style={{ justifyContent: 'flex-end',}}  >
                <View >
                    <Image
                        style={{ width: 50, height: 50,marginLeft:180,marginBottom:-200 }}
                        source={{ uri: 'https://booster.io/wp-content/uploads/order-custom-statuses-e1438362884694.png' }} />

                </View>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
                    {`Drop off`

                    }
                </Text>
                <Text style={{ color: 'grey', fontSize: 8, }}>
                    {`18 raza manzil ye chowk wo chowk pata nahi`}
                </Text>
            </TouchableOpacity>

            {/* <View style={styles.container}>

                <Text style={styles.swipeStatus}>{swipeStatusMessage}</Text>




                <SwipeButton
                    disableResetOnTap
                    forceReset={reset => {
                        forceResetLastButton = reset
                    }}
                    railBackgroundColor="white"
                    railStyles={{
                        backgroundColor: 'green',
                        borderColor: 'green',
                    }}
                    thumbIconBackgroundColor="#FFFFFF"
                    title="Swipe Right to Accept Order"
                    onSwipeSuccess={() => {
                        handleSuccess()
                        // Handle swipe to the right here
                      }}
                />




            </View> */}
            {/* <Switch
      value={checked}
      onValueChange={(value) => setChecked(value)}
    /> */}

            <Divider inset={true} insetType="right" />
            <TouchableOpacity>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
                    {`Price 300 `

                    }
                </Text>

            </TouchableOpacity>
            <Divider inset={true} insetType="right" />
        </View>
</>
    )
}

export default Details

const styles = StyleSheet.create({})