import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as CategoryActions } from '../ducks/category';

export function* getCategories() {
  try {
    const response = yield call(api.get, '/categories');

    yield put(CategoryActions.getCategoriesSuccess(response.data));
  } catch (err) {
    yield put(CategoryActions.getCategoriesFailure('Erro ao buscar as categorias.'));
  }
}
