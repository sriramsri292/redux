// actions.js
export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: { ...product, quantity: 1 },
  });
  
  export const updateQuantity = (productId, type) => ({
    type: 'UPDATE_QUANTITY',
    payload: { productId, type },
  });
  