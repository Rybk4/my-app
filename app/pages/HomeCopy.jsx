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
       
        <CarouselCont />
        <ButtonsSection />
        <Separator/>
        <RecomendSection />
     
    </ScrollView>
    
  );
   
};
 
export default HomeScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
 
});