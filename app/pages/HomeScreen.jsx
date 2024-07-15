import React from 'react';
import { View,Text ,Dimensions ,StyleSheet} from 'react-native';
 
import CarouselCont from '../components/CarouselCont';
const width = Dimensions.get('window').width;
const HomeScreen = () => {
  return (
    <View style={styles.container} >
      
      <CarouselCont/>
    
    </View>
    
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
 
});