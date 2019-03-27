import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { View, ToastAndroid } from 'react-native';
import { Creators as CartActions } from '../../store/ducks/cart';

import ProductItem from './components/ProductItem';

import styles from './styles';

const ProductDetails = ({ navigation, addToCart }) => {
  const product = navigation.getParam('product');

  const onAddCart = () => {
    ToastAndroid.show('Produto adicionado ao carrinho.', ToastAndroid.SHORT);
    addToCart(product);
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ProductItem product={product} onAddCart={onAddCart} />
      </View>
    </View>
  );
};

ProductDetails.navigationOptions = {
  title: 'Detalhe do produto',
};

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(ProductDetails);
