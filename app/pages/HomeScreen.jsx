import React from 'react';
import { View, Text, Dimensions, StyleSheet, FlatList, Image } from 'react-native';
import CarouselCont from '../components/CarouselCont';
import ButtonsSection from '../components/ButtonsSection';
import RecomendSection from '../components/RecomendSection';

 import Separator from '../components/Separator';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const sections = [
    { key: 'carousel', content: <CarouselCont /> },
    { key: 'buttons', content: <ButtonsSection /> },
    { key: 'separator', content: <Separator /> },
    { key: 'recommendations', content: <RecomendSection /> },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.sectionContainer}>
      {item.content}
    </View>
  );

  return (
    <FlatList
      data={sections}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      style={styles.container}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    borderTopColor: 'black',
    borderTopWidth: 1,
    backgroundColor: '#ffffff',
  },
  sectionContainer: {
    marginBottom: 10,
  },
});
