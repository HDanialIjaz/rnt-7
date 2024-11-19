import React from 'react';
import { Text, View, Image, StyleSheet,TouchableOpacity } from 'react-native';
import Button_card from './Button_card.js';

const ProductCard = () => {
  const buttonData = [
    { name: 'XS', color: 'black' }, // Button with orange background
    { name: 'S', color: 'White' }, // Button with green background
    { name: 'M', color: 'White' }, // Button with blue background
    { name: 'L', color: '#White' }, // Button with yellow background
  ];
  return (
    <View style={style.contanair}>
      <View>
        <Image
          source={{
            uri: 'https://cdn.shopify.com/s/files/1/0066/0360/4086/products/84176806f3844d4289036491be7a63f9_61962a12-1613-4a13-8c5e-aca379b8ae3a_600x.jpg?v=1663658145',
          }}
          style={style.img}
        />
      </View>
      <View style={style.info_container}>
        <View style={style.one_line}>
          <Text style={style.title}>Classic Utility Jacket</Text>
          <Text style={style.price}>$110.00</Text>
        </View>
        <Text style={style.stock}>In stock</Text>
        <View >
      <Button_card data={buttonData} />
    </View>
      </View>
    </View>
  );
};
export default ProductCard;

const style = StyleSheet.create({
  contanair: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    margin: 16,
    elevation: 5,
  },
  img: {
    width: '100%',
    height: 320,
    resizeMode: 'cover',
  },
  info_container: {
    padding: 10,
  },
  one_line:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 15,
    color: '#555',
    padding: 0,
    marginTop: 5,
  },
  stock: {
    fontSize: 15,
    color: '#AF504C',
    marginTop: 5,
  },
    
});
