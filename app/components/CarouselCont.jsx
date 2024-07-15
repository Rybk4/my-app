import React, { useRef, useState } from 'react';
import { Dimensions, Text, View, StyleSheet, FlatList, Image } from 'react-native';

import Separator from './Separator';

const CarouselCont = () => {
  const { width } = Dimensions.get('window');
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const data = [
    { id: 1, text: 'First Item', description: 'This is the first item', image: require('../assets/images/carousel/image1.jpg') },
    { id: 2, text: 'Second Item', description: 'This is the second item', image: require('../assets/images/carousel/image2.jpg') },
    { id: 3, text: 'Third Item', description: 'This is the third item', image: require('../assets/images/carousel/image3.jpeg') },
    { id: 4, text: 'Fourth Item', description: 'This is the fourth item', image: require('../assets/images/carousel/image4.jpg') },
    { id: 5, text: 'Fifth Item', description: 'This is the fifth item', image: require('../assets/images/carousel/image5.jpg') },
  ];

  const renderItem = ({ item }) => (
    <View style={{height:100}}>
      <View style={[styles.itemContainer, { width: width / 2.5 }]}>
        <Image source={item.image} style={styles.itemImage} />
      </View>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </View>
  );

  const onViewRef = React.useRef((viewableItems) => {
    if (viewableItems.viewableItems.length > 0) {
      setActiveIndex(viewableItems.viewableItems[0].index);
    }
  });

  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <View style={styles.container}>
     <View style={{height:120,}}>
        <FlatList
          ref={flatListRef}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          pagingEnabled
          snapToAlignment="start"
          snapToInterval={width / 2.5}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          
        />
     </View> 
     <Separator/>
      
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    height:100,
  },
   
   
  itemContainer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
    marginTop: 10,
  },
  itemText: {
    fontSize: 30,
    textAlign: 'center',
  },
  itemDescription: {
    marginTop: 2,
    fontSize: 12,
    textAlign: 'left',
    paddingLeft: 10,
  },
  itemImage: {
    width: '100%',
    height: 80, 
    borderRadius: 10,
  },
 
});

export default CarouselCont;
