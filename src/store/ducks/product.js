import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: null,
});

export const { Types, Creators } = createActions({
  getProductsRequest: ['categoryId'],
  getProductsSuccess: ['data'],
  getProductsFailure: ['error'],
});

const request = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
});

const success = (state = INITIAL_STATE, action) => ({
  ...state,
  data: action.data,
  error: null,
  loading: false,
});

const failure = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  error: action.error,
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_PRODUCTS_REQUEST]: request,
  [Types.GET_PRODUCTS_SUCCESS]: success,
  [Types.GET_PRODUCTS_FAILURE]: failure,
});
