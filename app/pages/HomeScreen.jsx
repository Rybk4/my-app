import React from 'react';
import { View,Text ,Dimensions ,StyleSheet , ScrollView } from 'react-native';
 
import CarouselCont from '../components/CarouselCont';

import ButtonsSection from '../components/ButtonsSection';

import RecomendSection from '../components/RecomendSection';

import Separator from '../components/Separator';


const width = Dimensions.get('window').width;
const HomeScreen = () => {
  return (
    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <CarouselCont />
        <ButtonsSection />
        <Separator/>
        <RecomendSection />
      </View>
    </ScrollView>
    
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
    justifyContent: 'center',
    
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
 
});