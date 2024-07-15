import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Dimensions } from 'react-native';

const data = [
  { id: 1, title: 'Товар 1', className: 'Класс 1', price: '1000 руб.', image: require('../assets/images/carousel/image1.jpg') },
  { id: 2, title: 'Товар 2', className: 'Класс 2', price: '2000 руб.', image: require('../assets/images/carousel/image1.jpg') },
  { id: 3, title: 'Товар 3', className: 'Класс 3', price: '3000 руб.', image: require('../assets/images/carousel/image1.jpg')},
  { id: 4, title: 'Товар 4', className: 'Класс 4', price: '4000 руб.', image: require('../assets/images/carousel/image1.jpg')},
  { id: 5, title: 'Товар 5', className: 'Класс 5', price: '5000 руб.', image: require('../assets/images/carousel/image1.jpg') },
  { id: 6, title: 'Товар 6', className: 'Класс 6', price: '6000 руб.', image: require('../assets/images/carousel/image1.jpg') },
  { id: 7, title: 'Товар 7', className: 'Класс 7', price: '7000 руб.', image: require('../assets/images/carousel/image1.jpg')},
  { id: 8, title: 'Товар 8', className: 'Класс 8', price: '8000 руб.', image: require('../assets/images/carousel/image1.jpg') },
];

const { width } = Dimensions.get('window');
const numColumns = 2;
const cardWidth = width / numColumns - 20;

const renderItem = ({ item }) => (
  <View style={[styles.card, { width: cardWidth }]}>
    <Image source={item.image} style={styles.image} />
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.className}>{item.className}</Text>
    <Text style={styles.price}>{item.price}</Text>
  </View>
);

const RecomendSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Вас могут заинтересовать</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft:10
  },
  listContainer: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  className: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#e91e63',
  },
});

export default RecomendSection;
