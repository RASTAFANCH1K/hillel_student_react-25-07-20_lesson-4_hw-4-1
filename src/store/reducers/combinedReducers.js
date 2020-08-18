import { combineReducers } from 'redux';

import productReducer from './productReducer';

const combinedReducers = combineReducers({
  products: productReducer
});

export default combinedReducers;