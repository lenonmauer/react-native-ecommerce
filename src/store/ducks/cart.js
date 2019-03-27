import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const INITIAL_STATE = Immutable({
  data: [],
});

export const { Types, Creators } = createActions({
  addToCart: ['product'],
  editQuantity: ['id', 'quantity'],
  removeFromCart: ['id'],
});

const addToCart = (state = INITIAL_STATE, action) => {
  const item = {
    id: Math.random(),
    product: action.product,
    quantity: 1,
  };

  return {
    ...state,
    data: [...state.data, item],
  };
};

const editQuantity = (state = INITIAL_STATE, action) => {
  const { id, quantity } = action;

  const data = state.data.map(item => (item.id !== id ? item : {
    ...item,
    quantity,
  }));

  return {
    ...state,
    data,
  };
};

const removeFromCart = (state = INITIAL_STATE, action) => {
  const data = state.data.filter(item => item.id !== action.id);

  return {
    ...state,
    data,
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.ADD_TO_CART]: addToCart,
  [Types.EDIT_QUANTITY]: editQuantity,
  [Types.REMOVE_FROM_CART]: removeFromCart,
});
