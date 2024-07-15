import React from 'react'

import { View, StyleSheet, } from 'react-native';

const Separator = () => {
  return (
    <View style={styles.separator}></View>
  )
}


const styles = StyleSheet.create({
    separator: {
        height: 10,
        backgroundColor: '#deddd9',
        width: '100%',
      },
});

export default Separator