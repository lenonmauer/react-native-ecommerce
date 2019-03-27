import React from 'react';

import { FlatList } from 'react-native';

import ProductItem from '../ProductItem';

import styles from './styles';

const ProductList = ({ items, onEditQuantity, onRemove }) => (
  <FlatList
    style={styles.container}
    data={items}
    keyExtractor={item => String(item.id)}
    renderItem={
      ({ item }) => (<ProductItem item={item} onEditQuantity={onEditQuantity} onRemove={onRemove} />)
    }
  />
);

export default ProductList;
