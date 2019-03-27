import React from 'react';

import {
  TouchableOpacity, Text, Image, View, TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../../styles';

import styles from './styles';

const ProductItem = ({ item, onEditQuantity, onRemove }) => (
  <View style={styles.container}>

    <View style={styles.productWrapper}>
      <Image
        style={styles.thumbnail}
        source={{ uri: item.product.image }}
      />

      <View>
        <Text style={styles.name}>{item.product.name}</Text>
        <Text style={styles.brand}>{item.product.brand}</Text>
        <Text style={styles.price}>{`R$${item.product.price.toString().replace('.', ',')}`}</Text>
      </View>
    </View>

    <View style={styles.actionsWrapper}>
      <View style={styles.inputContainer}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={3}
          keyboardType="numeric"
          underlineColorAndroid="transparent"
          style={styles.input}
          value={item.quantity.toString()}
          onChangeText={text => onEditQuantity(item.id, text)}
        />
      </View>

      <TouchableOpacity onPress={() => onRemove(item.id)}>
        <Icon name="clear" size={24} color={colors.regular} />
      </TouchableOpacity>
    </View>

  </View>
);

export default ProductItem;
