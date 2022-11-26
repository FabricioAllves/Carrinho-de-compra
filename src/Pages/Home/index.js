import { useContext, useState } from 'react'

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import Product from '../../components/Product';
import { CartContext } from '../../contexts/CartContext'



import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableOpacity
} from 'react-native';


export default function Home() {
  const { cart, addItemCart } = useContext(CartContext)

  const navigation = useNavigation()

  const [products, setProdutcs] = useState([
    {
      id: '1',
      name: 'Tinto EA 2019',
      price: 19.90,
      desconto: 5,
      img: 'https://cdn.shopify.com/s/files/1/0450/5783/5161/products/a0dce73331f126b0dce6b452fbcad1d2_1600x.jpg?v=1614949137'
    },
    {
      id: '2',
      name: 'Pêra Manca Tinto',
      price: 3750.00,
      desconto: 15,
      img: 'https://imgs.casasbahia.com.br/1545020861/1xg.jpg'
    },
    {
      id: '3',
      name: 'Tinto Don Melchor',
      price: 6512.00,
      desconto: 23,
      img: 'https://www.divinho.com.br/blog/wp-content/uploads/2020/08/Vinho-Don-Melchor.jpg'
    },
    {
      id: '4',
      name: 'Catena Zapata',
      price: 1700.00,
      desconto: 7,
      img: 'https://cdn.oaks.delivery/wp-content/uploads/catenazapatagallery.jpg'
    },
    {
      id: '5',
      name: 'Freixenet vintage',
      price: 149.99,
      desconto: 5,
      img: 'https://i.pinimg.com/736x/64/9c/83/649c83bc5a2aa36853ed36c906abcfb3--drinks.jpg'
    },
    {
      id: '6',
      name: 'Freixenet Carta Nev',
      price: 149.99,
      desconto: 3,
      img: 'https://http2.mlstatic.com/espumante-freixenet-carta-nevada-demi-sec-750ml-D_NQ_NP_835633-MLB26945777849_032018-F.jpg'
    },
    {
      id: '7',
      name: 'Tinto EA 2019',
      price: 19.90,
      desconto: 1,
      img: 'https://cdn.shopify.com/s/files/1/0450/5783/5161/products/a0dce73331f126b0dce6b452fbcad1d2_1600x.jpg?v=1614949137'
    },
    {
      id: '8',
      name: 'Pêra Manca Tinto',
      price: 3750.00,
      desconto: 88,
      img: 'https://imgs.casasbahia.com.br/1545020861/1xg.jpg'
    },
    {
      id: '9',
      name: 'Tinto Don Melchor',
      price: 6512.00,
      desconto: 5,
      img: 'https://www.divinho.com.br/blog/wp-content/uploads/2020/08/Vinho-Don-Melchor.jpg'
    },
    {
      id: '10',
      name: 'Catena Zapata',
      price: 1700.00,
      desconto: 5,
      img: 'https://cdn.oaks.delivery/wp-content/uploads/catenazapatagallery.jpg'
    },
    {
      id: '11',
      name: 'Freixenet vintage',
      price: 149.99,
      desconto: 5,
      img: 'https://i.pinimg.com/736x/64/9c/83/649c83bc5a2aa36853ed36c906abcfb3--drinks.jpg'
    },
    {
      id: '12',
      name: 'Freixenet Carta Nev',
      price: 149.99,
      desconto: 5,
      img: 'https://http2.mlstatic.com/espumante-freixenet-carta-nevada-demi-sec-750ml-D_NQ_NP_835633-MLB26945777849_032018-F.jpg'
    },
    {
      id: '13',
      name: 'Tinto EA 2019',
      price: 19.90,
      desconto: 5,
      img: 'https://cdn.shopify.com/s/files/1/0450/5783/5161/products/a0dce73331f126b0dce6b452fbcad1d2_1600x.jpg?v=1614949137'
    },
    {
      id: '14',
      name: 'Pêra Manca Tinto',
      price: 3750.00,
      desconto: 5,
      img: 'https://imgs.casasbahia.com.br/1545020861/1xg.jpg'
    },
    {
      id: '15',
      name: 'Tinto Don Melchor',
      price: 6512.00,
      desconto: 5,
      img: 'https://www.divinho.com.br/blog/wp-content/uploads/2020/08/Vinho-Don-Melchor.jpg'
    },
    {
      id: '16',
      name: 'Catena Zapata',
      price: 1700.00,
      desconto: 5,
      img: 'https://cdn.oaks.delivery/wp-content/uploads/catenazapatagallery.jpg'
    },
    {
      id: '17',
      name: 'Freixenet vintage',
      price: 149.99,
      desconto: 5,
      img: 'https://i.pinimg.com/736x/64/9c/83/649c83bc5a2aa36853ed36c906abcfb3--drinks.jpg'
    },
    {
      id: '18',
      name: 'Freixenet Carta Nev',
      price: 149.99,
      desconto: 5,
      img: 'https://http2.mlstatic.com/espumante-freixenet-carta-nevada-demi-sec-750ml-D_NQ_NP_835633-MLB26945777849_032018-F.jpg'
    },

    {
      id: '19',
      name: 'Pêra Manca Tinto',
      price: 3750.00,
      desconto: 5,
      img: 'https://imgs.casasbahia.com.br/1545020861/1xg.jpg'
    },
    {
      id: '20',
      name: 'Tinto Don Melchor',
      price: 6512.00,
      desconto: 5,
      img: 'https://www.divinho.com.br/blog/wp-content/uploads/2020/08/Vinho-Don-Melchor.jpg'
    },
    {
      id: '21',
      name: 'Catena Zapata',
      price: 1700.00,
      desconto: 5,
      img: 'https://cdn.oaks.delivery/wp-content/uploads/catenazapatagallery.jpg'
    },
    {
      id: '22',
      name: 'Freixenet vintage',
      price: 149.99,
      desconto: 5,
      img: 'https://i.pinimg.com/736x/64/9c/83/649c83bc5a2aa36853ed36c906abcfb3--drinks.jpg'
    },
    {
      id: '23',
      name: 'Freixenet Carta Nev',
      price: 149.99,
      desconto: 5,
      img: 'https://http2.mlstatic.com/espumante-freixenet-carta-nevada-demi-sec-750ml-D_NQ_NP_835633-MLB26945777849_032018-F.jpg'
    },
  ])



  function handleAddCart(item) {
    addItemCart(item)
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cartContent}>
        <Text style={styles.title}>Vinhos</Text>

        <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate("Cart")}>
          <View style={styles.dot}>
            <Text style={styles.dotText}>{cart?.length}</Text>
          </View>
          <Feather name='shopping-cart' size={30} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>

        <View style={styles.scrollView}>
          <Text style={[styles.textScroll, {color: "#d03"}]}>Promoções</Text>
        </View>
        
        <View style={styles.scrollView}>
          <Text style={styles.textScroll}>Tinto</Text>
        </View>
        
        <View style={styles.scrollView}>
          <Text style={styles.textScroll}>Branco</Text>
        </View>
        
        <View style={styles.scrollView}>
          <Text style={styles.textScroll}>Promoções</Text>
        </View>
        
        <View style={styles.scrollView}>
          <Text style={styles.textScroll}>Tinto</Text>
        </View>
        
        <View style={styles.scrollView}>
          <Text style={styles.textScroll}>Branco</Text>
        </View>


      </ScrollView>

      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.list}
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Product data={item} addToCart={() => handleAddCart(item)} />}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingEnd: 14,
    paddingStart: 14,
  },
  cartContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  dot: {
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
  dotText: {
    fontSize: 12,
    color: '#fff'
  },
  scroll: {
    marginBottom: 20,
    height: 50,
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20
  },
  textScroll: {
    fontWeight: 'bold',
    fontSize: 15
  }
})