import React from "react";
import "./CartItem.css";

const CartItem = (props) => {
  const { img, name, price, manufacturer, quantity } = props.product;
  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <img src={img} alt="" />
      </div>
      <div className="cart-item-details">
        <h3>{name}</h3>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
