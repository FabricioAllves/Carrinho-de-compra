import { useState } from 'react'
import React from 'react';

import {Feather} from '@expo/vector-icons'

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from 'react-native';

export default function Home() {
  const [products, setProdutcs] = useState([
    {
      id: '1',
      name: 'Cola cola',
      price: 19.90
    },
    {
      id: '2',
      name: 'Chocolate',
      price: 6.50
    },
    {
      id: '3',
      name: 'Queijo 500g',
      price: 15
    },
    {
      id: '4',
      name: 'Refligerente Peps',
      price: 5.50
    },
    {
      id: '5',
      name: 'Guarana lata',
      price: 6.90
    },
  ])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContent}>
        <Text style={styles.title}>Lista de produtos</Text>

        <TouchableOpacity style={styles.cartButton}>
          <View style={styles.dot}>
            <Text style={styles.dotText}>3</Text>
          </View>
          <Feather name='shopping-cart' size={30} color="#000"/>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingEnd: 14,
    paddingStart: 14,
  },
  cartContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24
  },
  title:{
    fontSize: 24,
    fontWeight: '600',
  },
  dot:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 12,
    position: 'absolute',
    zIndex: 99,
    bottom: -2,
    left: -4
  },
  dotText:{
    fontSize: 12
  }
})