// CartContextProvider.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateQuantity } from './actions'; // Update path accordingly

const CartContext = React.createContext();

export const useCart = () => React.useContext(CartContext);

export default function CartContextProvider({ children }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    // Fetch data and set cart (if needed)
  }, [dispatch]);

  const value = {
    cart,
    addToCart: (product) => dispatch(addToCart(product)),
    updateQuantity: (productId, type) => dispatch(updateQuantity(productId, type)),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
