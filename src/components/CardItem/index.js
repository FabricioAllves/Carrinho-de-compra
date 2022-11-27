import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function CardItem({ data, addAmount, removeAmount }) {
  const [amount, setAmount] = useState(data?.amount)

  function handleIncrease() {
    addAmount();
    setAmount(item => item + 1)
  }

  function handleDecrease() {
    removeAmount();
    if (amount === 0) {
      setAmount(0)
      return;
    }

    setAmount(item => item - 1)
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Image style={styles.img}
          resizeMode="cover"
          source={{ uri: data.img }}
        />
        <View style={styles.viewTitlePrice}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>R$ {data.price.toFixed(2)}</Text>
        </View>
      </View>

      <View style={styles.amountContainer}>
        <TouchableOpacity style={styles.buttonRemove} onPress={handleDecrease}>
          <Text>-</Text>
        </TouchableOpacity>

        <Text style={styles.amount}>{amount}</Text>

        <TouchableOpacity style={styles.buttonAdd} onPress={handleIncrease}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#dfdfdf',
    borderRadius: 2,
    marginBottom: 14,
    padding: 8,
    elevation: 8,
    borderBottomWidth: 3,
    shadowColor: '#000',
  },
  viewTitlePrice:{
    paddingStart: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10
  },
  price: {
    fontSize: 16,
  },
  amountContainer: {
    marginTop: 14,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonAdd: {
    backgroundColor: '#5b7',
    padding: 6,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 3
  },
  buttonRemove: {
    backgroundColor: '#d14f',
    padding: 6,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 3
  },
  amount: {
    marginLeft: 14,
    marginRight: 14
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 10
  }
})