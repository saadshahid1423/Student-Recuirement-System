import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';
import AppNavigation from './src/config/navigation/navigation';

export default function App() {
  return (
    <AppNavigation />
  );
}