// reducers/index.js
import { combineReducers } from 'redux';

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload];
    case 'UPDATE_QUANTITY':
      // Implement logic to update quantity
      return state;
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers as needed
});

export default rootReducer;
