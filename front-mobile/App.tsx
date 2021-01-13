import{ useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
//import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Header';
import AppLoading from 'expo-app-loading';
import Home from './src/Home';



export default function App() {
  let [fontsLoaded] = useFonts({
    //Lobster_400Regular,
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
