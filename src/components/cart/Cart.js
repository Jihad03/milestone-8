import React, { useState } from "react";
import CartItem from "../cartItem/CartItem";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
  let quantity = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total += product.price * product.quantity;
    quantity += product.quantity;
  }
  return (
    <div className="cart-section">
      <i className="fa-solid fa-cart-shopping fa-2xl cart-logo"></i>
      <div className="cart-details">
        <h3>Added Items: {quantity}</h3>
        <h3>Total Price: {total}</h3>
        <div className="cart-item-container">
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
<h2>Cart</h2>;
