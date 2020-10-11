import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.firstView}>
    <Button title="Add new goal" />
   
   
  </View>
  )}

  const styles = StyleSheet.create({
    firstView: {
      padding: 50
    },
  })