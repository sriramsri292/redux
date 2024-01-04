import React from "react";
import { useCart } from "./CartContextProvider";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

export default function Home() {
  const { cart = [] } = useCart();
  const { addCart=[],setAddCart}=useCart();
  const addToCart = (product) => {
    // Initialize the quantity property to 1 for the new product
    const productWithQuantity = { ...product, quantity: 1 };
    
    // Add the product to the addCart array
    setAddCart([...addCart, productWithQuantity]);
  
    // Log the added product and the updated addCart array
    console.log("Product added to addCart:", productWithQuantity);
    console.log("Updated addCart:", [...addCart, productWithQuantity]);
  };
  
  
  return (
    <div className="f">
      <Container fluid="md">
        <div className="aa">
          <Navbar className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-icon-symbol-png-logo-21.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{' '}
                SHOP NOW
              </Navbar.Brand>
            </Container>
          </Navbar>
          <div className="b">
          

            <Link style={{marginLeft:'30%'}} to="/cart">Cart </Link>
          </div>
        </div>
        <div className="c">
          <img src="https://cdn.pixabay.com/photo/2016/08/14/16/53/internet-1593378_1280.jpg" alt="Internet" />
        </div>
      </Container>
      <div className="container">
  <div className="row ">
    {cart.map((product, i) => (
      <div key={product.id} className="col-5">
        <h3>{product.title}</h3>
        <p>Description: {product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Discount: {product.discountPercentage}%</p>
        {/* You can display more product details as needed */}
        <img src={product.thumbnail} alt={product.title} />
        <button className="ca" onClick={() => addToCart(product)}>ADD To Cart</button>
      </div>
    ))}
  </div>
</div>


    </div>
  );
}
