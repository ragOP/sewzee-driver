import { StyleSheet, Text, View, Button, Switch, Image } from 'react-native'
import React, { useState } from 'react'
import { Divider } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SwipeButton from 'rn-swipe-button';


const Details = () => {

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

    return (
        <View style={{ marginTop: 10, marginLeft: 30, padding: 30, height: 370, width: 300, backgroundColor: 'white' }}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
                {`Order #6969`

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

    )
}

export default Details

const styles = StyleSheet.create({})