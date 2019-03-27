import React from 'react';

import { TouchableOpacity, Text, Image } from 'react-native';

import styles from './styles';

const ProductItem = ({ product, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Image
      style={styles.thumbnail}
      source={{ uri: product.image }}
    />
    <Text style={styles.name}>{product.name}</Text>
    <Text style={styles.brand}>{product.brand}</Text>
    <Text style={styles.price}>{`R$${product.price.toString().replace('.', ',')}`}</Text>
  </TouchableOpacity>
);

export default ProductItem;
