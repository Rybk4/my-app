import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const ButtonsSection = () => {
  const { width } = Dimensions.get('window');  
  const numColumns = 4;  
  const numRows = 2;  
  const itemWidth = width / numColumns - 20;  
  const itemHeight = 70; 
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, { width: itemWidth, height: itemHeight, backgroundColor: '#ff6347' }]}>
        <Text style={styles.buttonText}>Button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: itemWidth, height: itemHeight, backgroundColor: '#4682b4' }]}>
        <Text style={styles.buttonText}>Button 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: itemWidth, height: itemHeight, backgroundColor: '#3cb371' }]}>
        <Text style={styles.buttonText}>Button 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: itemWidth, height: itemHeight, backgroundColor: '#ffa500' }]}>
        <Text style={styles.buttonText}>Button 4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: itemWidth, height: itemHeight, backgroundColor: '#8a2be2' }]}>
        <Text style={styles.buttonText}>Button 5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: itemWidth, height: itemHeight, backgroundColor: '#ff4500' }]}>
        <Text style={styles.buttonText}>Button 6</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: itemWidth, height: itemHeight, backgroundColor: '#8a2be2' }]}>
        <Text style={styles.buttonText}>Button 7</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: itemWidth, height: itemHeight, backgroundColor: '#ff4500' }]}>
        <Text style={styles.buttonText}>Button 8</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop:30,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ButtonsSection;
