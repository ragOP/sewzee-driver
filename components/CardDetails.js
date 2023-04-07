import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const data = [
    { id: 1, type: 'total order', title: '10' },
    { id: 2, type: 'cancel', title: '12' },
    { id: 3, type: 'pending', title: '3' },
    { id: 4, type: 'accepted', title: '4' },
    { id: 5, type: 'total order', title: '5' },
    { id: 6, type: 'pending', title: '6' },
    { id: 7, type: 'accepted', title: '7' },
    { id: 8, type: 'cancel', title: '8' },
  ];

const renderItem = ({ item }) => (
  <View style={styles.card}>
    <Text style={styles.cardText}>{item.title}</Text>
    <Text style={styles.cardSubtitle}>{item.type}</Text>
 
  </View>
);

const CardDetails = () => {
  return (
    <ScrollView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  card: {
    width: (width - 30) / 2,
    aspectRatio: 1,
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    alignSelf: 'flex-end',
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#666',
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
});

export default CardDetails;



