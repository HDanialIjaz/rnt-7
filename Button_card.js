import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button_card = ({ data }) => (
  <View>
    <View style={style.info_button}>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[style.button, { backgroundColor: item.color }]}>
          <Text
            style={
              (style.button_Text, { color: index === 0 ? 'white' : 'black' })
            }>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
      <View style={style.separator} />
    <View style={style.buttoncontainer}>
      <TouchableOpacity style={style.buybutton}>
        <Text style={style.buybuttontext}>Buy now</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.addbutton}>
        <Text style={style.addbuttontext}>Add to bag</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.wishlistButton}>
        <Text style={style.heartText}>♡</Text>
      </TouchableOpacity>
    </View>
    <View>
    <Text style={style.shippingInfo}>
          Free shipping on all continental US orders.
        </Text>
    </View>
  </View>
);

export default Button_card;

const style = StyleSheet.create({
  info_button: {
    flexDirection: 'row', // Display buttons in a row
    flexWrap: 'wrap', // Prevent wrapping or allow wrapping if needed
    justifyContent: 'flex-start', // Align items to the left
    alignItems: 'center', // Center buttons vertically
    padding: 10,
  },
  button: {
    backgroundColor: '#007BFF', // Default blue background
    paddingVertical: 10, // Padding top and bottom
    paddingHorizontal: 20, // Padding left and right
    borderRadius: 8, // Rounded corners
    borderWidth: 1, // Border around button
    marginRight: 10, // Space between buttons
    marginBottom: 10, // Space if buttons wrap to the next row
  },
  button_Text: {
    color: 'black', // White text for contrast
    fontSize: 16, // Font size for readability
    fontWeight: 'bold', // Semi-bold text
    textAlign: 'center', // Center align text within the button
  },
   separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  buttoncontainer: {
    flexDirection: 'row',
  },
  buybutton:{
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginRight: 8,
    marginLeft:14,
  },
  buybuttontext:{
    color: 'white',
    fontSize:14,
    fontWeight:'bold',
  },
  addbutton:{
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginRight: 18,
    marginLeft:8,
  },
  addbuttontext:{
    color: '#000',
    fontSize: 14,
  },
  wishlistButton:{
     borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 4,
  },
   heartText: {
    fontSize: 18,
    color: '#000',
  },
  shippingInfo: {
    fontSize: 12,
    color: '#555',
    textAlign:'center',
    padding:15,
  }
});
