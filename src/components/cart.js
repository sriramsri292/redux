import React, { useEffect, useState } from "react";
import { useCart } from "./CartContextProvider";

export default function Cart() {
  const { addCart = [], handleQuantity, setAddCart } = useCart();
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setAddCart(addCart);
  }, [addCart, setAddCart]);

  useEffect(() => {
    // Calculate total amount whenever addCart changes
    const newTotalAmount = addCart.reduce((total, product) => {
      return total + product.quantity * product.price;
    }, 0);
    setTotalAmount(newTotalAmount);
  }, [addCart]);

  // Function to update quantity for a specific product
  const updateQuantity = (productId, type) => {
    const updatedCart = addCart.map((product) => {
      if (product.id === productId) {
        const newQuantity =
          type === "decrement"
            ? Math.max(product.quantity - 1, 1) // Ensure quantity doesn't go below 1
            : product.quantity + 1;
        return { ...product, quantity: newQuantity };
      }
      return product;
    });

    setAddCart(updatedCart);
  };

  if (!Array.isArray(addCart) || addCart.length === 0) {
    return (
      <div>
        <h1>Your cart is empty buddy !!!!!</h1>
      </div>
    );
  }

  return (
    <div className="bbbb">
      <h2>Your Cart</h2>
      <ul>
        {addCart.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>Description: {product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Discount: {product.discountPercentage}%</p>
            <p>Quantity: {product.quantity}</p>
            <img src={product.thumbnail} alt={product.title} />
            <p>Subtotal: ${product.quantity * product.price}</p>
            <button onClick={() => updateQuantity(product.id, "decrement")}>
              Decrement quantity
            </button>
            <button onClick={() => updateQuantity(product.id, "increment")}>
              Increment quantity
            </button>
          </li>
        ))}
      </ul>
      <div>
        <h3>Total Amount: ${totalAmount}</h3>
      </div>
    </div>
  );
}
