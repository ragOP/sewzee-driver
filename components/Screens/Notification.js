import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
// import { Icon, Badge } from 'react-native-elements';
import moment from 'moment';
import FastImage from 'react-native-fast-image';

const notifications = [
    {
        id: 1,
        title: 'New message',
        message: 'You have a new message from John',
        time: moment().subtract(2, 'hours').toDate(),
        read: false,
    },
    {
        id: 2,
        title: 'New follower',
        message: 'You have a new follower on Instagrams',
        time: moment().subtract(1, 'day').toDate(),
        read: true,
    },
    {
        id: 3,
        title: 'New comments',
        message: 'Someone commented on your post',
        time: moment().subtract(3, 'days').toDate(),
        read: false,
    },
    {
        id: 4,
        title: 'aaaaaaNew comments',
        message: 'Someone commented on your post',
        time: moment().subtract(3, 'days').toDate(),
        read: false,
    },
    {
        id: 5,
        title: 'aaaaaaNew comments',
        message: 'Someone commented on your post',
        time: moment().subtract(3, 'days').toDate(),
        read: false,
    },
    {
        id: 6,
        title: 'aaaaaaNew comments',
        message: 'Someone commented on your post',
        time: moment().subtract(3, 'days').toDate(),
        read: false,
    },
    {
        id: 7,
        title: 'aaaaaaNew comments',
        message: 'Someone commented on your post',
        time: moment().subtract(3, 'days').toDate(),
        read: false,
    },
    {
        id: 8,
        title: 'aaaaaaNew comments',
        message: 'Someone commented on your post',
        time: moment().subtract(3, 'days').toDate(),
        read: false,
    },
];

const handle = ({ navigation }) => {
    navigation.navigate('Notification')
}
const Notification = ({ navigation }) => {
    return (
        <ScrollView>
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
                                source={require('../../images/user-profile.jpg')}
                                style={{ width: 35, height: 35 }}
                                imageStyle={{ borderRadius: 25 }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handle}>
                            <FastImage
                                source={require('../../images/notis.gif')}
                                style={{ width: 45, height: 35 }}
                                imageStyle={{ borderRadius: 25 }}
                            />
                        </TouchableOpacity>
                    </View>






                </ScrollView>

            </View>
            {notifications.map((notification) => (
                <View key={notification.id} style={styles.notificationContainer}>
                    {/* <Icon
            name="notifications"
            color={notification.read ? '#ddd' : '#555'}
            size={24}
            style={styles.notificationIcon}
          /> */}
                    <View>
                        <Text style={styles.notificationTitle}>{notification.title}</Text>
                        <Text style={styles.notificationMessage}>{notification.message}</Text>
                    </View>
                    {/* <Badge
            value={moment(notification.time).fromNow()}
            status={notification.read ? 'primary' : 'error'}
            badgeStyle={styles.notificationBadge}
            textStyle={styles.notificationBadgeText}
          /> */}
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    notificationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#ddd',
        backgroundColor: 'grey',
    },
    notificationIcon: {
        marginRight: 16,
    },
    notificationTitle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    notificationMessage: {
        fontSize: 14,
        color: '#555',
    },
    notificationBadge: {
        height: 24,
        paddingHorizontal: 8,
        borderRadius: 12,
        backgroundColor: '#eee',
    },
    notificationBadgeText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default Notification 
