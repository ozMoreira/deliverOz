import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Header from '../Header';
import OrderCard from '../OrderCard';

function Orders() {

  const handleOnPress = () => {

  }
  
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </ScrollView>
    </>
  );
}


const styles=StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%'
  }

});

export default Orders;