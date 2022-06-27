import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  return (
    <div className="cart-section">
      <i className="fa-solid fa-cart-shopping fa-2xl cart-logo"></i>
      <div className="cart-details">
        <h3>Added Items: {cart.length}</h3>
        <h3>Total Price: 0</h3>
      </div>
    </div>
  );
};

export default Cart;
<h2>Cart</h2>;
