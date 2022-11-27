import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

import { Feather } from '@expo/vector-icons'

export default function About(props) {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar} >
          <Feather name='chevron-left' color="#fff" size={30} style={styles.buttonInfo} />
          <Text style={{ color: '#fff', fontSize: 16 }}>Voltar</Text>
        </TouchableOpacity>


        <ScrollView>
        <Image style={styles.img}
            resizeMode="cover"
            source={{ uri: props.infoAll.img }}
          />
          <Text style={styles.textDesc}>Descrição: {props.infoAll.descricao}</Text>
          <Text style={styles.textDesc}>Nome: {props.infoAll.name}</Text>
          <Text style={styles.textDesc}>Região: {props.infoAll.regiao}</Text>
          <Text style={styles.textDesc}>País: {props.infoAll.pais}</Text>
          <Text style={styles.textDesc}>Uvas: {props.infoAll.uvas}</Text>
          <Text style={styles.textDesc}>Teor alcoólico: {props.infoAll.teor_alcoolico}</Text>
        </ScrollView>


      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%'
  },
  modalContainer: {
    backgroundColor: '#fff',
    height: '85%',
    width: '100%',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5
  },
  btnVoltar: {
    backgroundColor: '#e52246',
    padding: 10,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  img:{
    width: '100%',
    height: 400
  },
  textDesc:{
    fontWeight: 'bold',
    fontStyle:'italic'
  }


})