import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ProductActions } from '../ducks/product';

export function* getProducts(action) {
  try {
    const response = yield call(api.get, `/category_products/${action.categoryId}`);

    yield put(ProductActions.getProductsSuccess(response.data.products));
  } catch (err) {
    yield put(ProductActions.getProductsFailure('Erro ao buscar os produtos.'));
  }
}
