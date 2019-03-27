import React from 'react';

import {
  TouchableOpacity, Text, Image, View,
} from 'react-native';

import styles from './styles';

const ProductItem = ({ product, onAddCart }) => (
  <View style={styles.container}>
    <Image
      style={styles.thumbnail}
      source={{ uri: product.image }}
    />

    <View style={styles.info}>
      <Text style={styles.name}>{product.name}</Text>

      <View style={styles.priceWrapper}>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.price}>{`R$${product.price.toString().replace('.', ',')}`}</Text>
      </View>
    </View>

    <View style={styles.button}>
      <TouchableOpacity onPress={onAddCart}>
        <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default ProductItem;
