import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
});
