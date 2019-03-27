import React from 'react';
import { withNavigation } from 'react-navigation';

import { FlatList } from 'react-native';

import ProductItem from '../ProductItem';

import styles from './styles';

const ProductList = ({ navigation, products }) => (
  <FlatList
    style={styles.container}
    data={products}
    keyExtractor={product => String(product.id)}
    numColumns={2}
    columnWrapperStyle={styles.columnWrapper}
    renderItem={
      ({ item }) => <ProductItem product={item} onPress={() => navigation.navigate('ProductDetails', { product: item })} />
    }
  />
);

export default withNavigation(ProductList);
