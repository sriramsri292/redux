import React, { createContext, useContext, useState ,useEffect} from "react";



/**
 * createContext - Creates new context from the CONTEXT API
 */
const CartContext = createContext({
  cart: [],
  setCart: () => Promise,
  addcart:[],
  setAddCart:()=>Promise,
  handleQuantity: () => null,
});


export const useCart = () => useContext(CartContext);


export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [addCart,setAddCart]=useState([]);
  function handleQuantity(id = 0, type = "") {
    const cartCopy = [...cart];
    const matchedIndex = cartCopy.findIndex((d) => d.id === id);
  
    if (matchedIndex !== -1) {
      const matchedData = { ...cartCopy[matchedIndex] };
  
      // Check if quantity is NaN, set it to 1
      if (isNaN(matchedData.quantity)) {
        matchedData.quantity = 1;
      }
  
      if (type === "decrement" && matchedData.quantity > 1) {
        matchedData.quantity -= 1;
      } else if (type === "increment") {
        matchedData.quantity += 1;
      }
  
      cartCopy[matchedIndex] = matchedData;
      setCart([...cartCopy]); // Update the state with the new array
    } else {
      console.error("No Matching Food Item found in cart");
      alert("No Matching Food Item found in cart");
    }
  }
  
  
  
  useEffect(() => {
    fetch("http://localhost:3000/mock/product.Json")
      .then((response) => response.json())
      .then((r) => {
        console.log("API Response:", r); // Log the entire response
        
        if (r && r.products) { // Check for the "products" property instead of "data"
          console.log("Setting cart data:", r.products); // Log the data being set
          setCart(r.products); // Set the cart state with the "products" array
        } else {
          console.log("Response does not contain products property:", r);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        console.log("Response:", error.response);
      });
  }, []);
  
  
  
  
  
  

  const value = {
    cart,
    setCart,
    addCart,
    setAddCart,
    handleQuantity,  };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
  }
  
