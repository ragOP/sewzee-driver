import { StyleSheet, Text, View,ScrollView,TouchableOpacity,LayoutAnimation  } from 'react-native'
import React,{useState} from 'react'
import CardSilder from 'react-native-cards-slider';

const Payment = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setExpanded(!expanded);
    }
    return (
        <>

            <View style={styles.container}>
                <View style={styles.card}>
                    <Text>Total Earning</Text>
                </View>

                <View style={styles.card}>
                    <Text>Bonus</Text>
                </View>
                <View style={styles.card}>
                    <Text>children</Text>
                </View>

            </View>
        
        </>
    )
}

export default Payment

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 5,
        width: 100,
        height: 80,
    },
    scrollContainer: {
        width: 300,
        height: 400,
        padding: 10,
      },
      box: {
        width: 100,
        height: 100,
        backgroundColor: '#f00',
        borderRadius: 10,
      },
      header: {
        backgroundColor: '#F5FCFF',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      headerText: {
        fontWeight: 'bold',
        fontSize: 16
      },
      content: {
        padding: 10
      },
      contentText: {
        fontSize: 14
      }
});
