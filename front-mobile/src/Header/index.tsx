import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function Header() {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('Home');
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={handleOnPress}>
        <View style={styles.container}>
          <Image source={require('../Assets/logo.png')} /> 
          <Text style={styles.text}>deliverOz</Text>
        </View>
        </TouchableWithoutFeedback>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#DA5C5C',
      height: 80,
      paddingTop: 35,
      flexDirection: 'row',
      justifyContent: 'center'
  },
  text: {
      fontWeight: 'bold',
      fontSize: 20,
      lineHeight: 25,
      letterSpacing: 2.00,
      color: '#FFF', 
      marginLeft: 15,
      fontFamily: 'Lobster_400Regular'
  }
});

export default Header;