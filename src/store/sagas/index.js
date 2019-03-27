import { all, takeLatest } from 'redux-saga/effects';

import { getCategories } from './category';
import { getProducts } from './product';

import { Types as CategoryTypes } from '../ducks/category';
import { Types as ProductTypes } from '../ducks/product';

export default function* rootSaga() {
  yield all([
    takeLatest(CategoryTypes.GET_CATEGORIES_REQUEST, getCategories),
    takeLatest(ProductTypes.GET_PRODUCTS_REQUEST, getProducts),
  ]);
}
