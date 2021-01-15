import React from 'react';
import{ useFonts as useOpenSans, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { useFonts as useLobster, Lobster_400Regular } from '@expo-google-fonts/lobster';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import Routes from './src/Routes';



export default function App() {
  let [openSansLoaded] = useOpenSans({
        OpenSans_400Regular,
        OpenSans_700Bold
  });
  let [lobsterLoaded] = useLobster({
        Lobster_400Regular,
  });

  if (!openSansLoaded && !lobsterLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Routes />
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
