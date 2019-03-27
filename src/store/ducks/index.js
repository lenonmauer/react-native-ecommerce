import { combineReducers } from 'redux';

import cart from './cart';
import category from './category';
import product from './product';

export const Reducers = combineReducers({
  cart,
  category,
  product,
});
