import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, ActivityIndicator } from 'react-native';

import { Creators as CategoryActions } from '../../store/ducks/category';
import { Creators as ProductActions } from '../../store/ducks/product';

import CategoryBar from './components/CategoryBar';
import ProductList from './components/ProductList';

import styles from './styles';

class Main extends Component {
  componentDidMount() {
    this.props.getCategoriesRequest();
  }

  componentDidUpdate(prevProps) {
    const { currentCategory } = this.props;

    if (prevProps.currentCategory !== currentCategory) {
      this.props.getProductsRequest(currentCategory.id);
    }
  }

  render() {
    const {
      categories,
      currentCategory,
      setCurrentCategory,
      products,
      productsLoading,
      categoriesLoading,
    } = this.props;

    return (
      <View style={styles.container}>
        {categoriesLoading ? (
          <ActivityIndicator size="large" color="#999" style={styles.loading} />
        ) : (
          <CategoryBar
            categories={categories}
            current={currentCategory}
            onChange={setCurrentCategory}
          />
        )}

        <View style={styles.content}>
          {productsLoading ? (
            <ActivityIndicator size="large" color="#999" style={styles.loading} />
          ) : (
            <ProductList products={products} />
          )}
        </View>
      </View>
    );
  }
}

const formatTitle = categories => categories.map(category => ({
  ...category,
  title: category.title.toUpperCase(),
}));

const mapStateToProps = state => ({
  categories: formatTitle(state.category.data),
  products: state.product.data,
  productsLoading: state.product.loading,
  categoriesLoading: state.category.loading,
  currentCategory: state.category.current,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...CategoryActions, ...ProductActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
