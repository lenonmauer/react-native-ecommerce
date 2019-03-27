import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { View, Text } from 'react-native';

import { Creators as CartActions } from '../../store/ducks/cart';

import ProductList from './components/ProductList';

import styles from './styles';

const Cart = ({
  items, total, editQuantity, removeFromCart,
}) => (
  <View style={styles.container}>
    {items.length ? (
      <Fragment>
        <View style={styles.content}>
          <ProductList items={items} onEditQuantity={editQuantity} onRemove={removeFromCart} />
        </View>

        <View style={styles.subtotalContainer}>
          <Text style={styles.subtotalLabel}>Subtotal</Text>
          <Text style={styles.subtotalPrice}>{`R$${total}`}</Text>
        </View>
      </Fragment>
    ) : (
      <View style={styles.content}>
        <Text>Nenhum produto adicionado no carrinho.</Text>
      </View>
    )}
  </View>
);

const formatTotal = total => (total !== 0 ? total.toString().replace('.', ',') : '0,00');

const calculateTotal = items => items.reduce((acc, item) => acc + Number(item.quantity) * item.product.price, 0);

const mapStateToProps = state => ({
  items: state.cart.data,
  total: formatTotal(calculateTotal(state.cart.data)),
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
