import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  data: [],
  current: null,
  loading: false,
  error: null,
});

export const { Types, Creators } = createActions({
  getCategoriesRequest: [],
  getCategoriesSuccess: ['data'],
  getCategoriesFailure: ['error'],
  setCurrentCategory: ['category'],
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
  current: action.data[0],
});

const failure = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  error: action.error,
});

const setCurrent = (state = INITIAL_STATE, action) => ({
  ...state,
  current: action.category,
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_CATEGORIES_REQUEST]: request,
  [Types.GET_CATEGORIES_SUCCESS]: success,
  [Types.GET_CATEGORIES_FAILURE]: failure,
  [Types.SET_CURRENT_CATEGORY]: setCurrent,
});
