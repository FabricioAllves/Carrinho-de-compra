import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';

import { Feather } from '@expo/vector-icons'

import About from '../About';


export default function Product({ data, addToCart }) {
  const [visibleModal, setVisibleModal] = useState(false)


  function ModalVisible(){
    if(!visibleModal){
        setVisibleModal(true)
    }else{
        setVisibleModal(false)
    }
}


  return (
    <View style={styles.container}>

      <View style={styles.container1}>

        <TouchableOpacity style={styles.buttonView} onPress={ModalVisible}>
          <Image style={styles.img}
            resizeMode="cover"
            source={{ uri: data.img }}
          />

          <Feather name='info' size={30} style={styles.buttonInfo} />

        </TouchableOpacity>

        <View>
          <Text style={styles.price}>R$ {data.price.toFixed(2)}</Text>
          <Text style={styles.title}>{data.name}</Text>
          <View style={styles.desconto}>
            <Text style={styles.descontoText}>{data.desconto}% off</Text>
          </View>
        </View>

      </View>

      <TouchableOpacity style={styles.buttonAdd} onPress={addToCart}>
        <Text style={styles.buttonText}>Comprar</Text>
      </TouchableOpacity>

      <Modal transparent={true} animationType='slide' visible={visibleModal}>
        <About infoAll={data} voltar={ModalVisible}/>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderRadius: 6,
    marginBottom: 14,
    padding: 8,
    paddingBottom: 14,
    paddingTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  container1: {

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  title: {
    fontWeight: 'bold'
  },
  price: {
    fontWeight: 'bold',
    color: '#5b7',
    fontSize: 16
  },
  desconto: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#d14',
    width: 60,
    borderRadius: 5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  descontoText: {
    fontSize: 12,
    color: '#fff',
    borderRadius: 5
  },

  buttonAdd: {
    paddingStart: 12,
    paddingEnd: 12,
    backgroundColor: '#5b7',
    paddingTop: 6,
    paddingBottom: 6,
    borderRadius: 4,
    margin: 5
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  img: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 10
  },
  buttonView:{
    justifyContent:'flex-end',
 
  },
  buttonInfo:{
    position: 'absolute',
    color: '#fff'
  }
})
