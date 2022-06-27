import React from "react";
import Rating from "react-rating";
import "./Products.css";

const Products = (props) => {
  const { name, price, manufacturer, img, ratings } = props.product;
  const { handleAddToCart } = props;
  return (
    <div className="product-section">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="product-details-container">
        <h1>{name}</h1>
        <p>Price: &#2547;{price}</p>
        <Rating
          initialRating={ratings}
          emptySymbol="fa fa-star-o ratings-color"
          fullSymbol="fa fa-star ratings-color"
          readonly
        />
        <small>By {manufacturer}</small>
        <button className="btn" onClick={() => handleAddToCart(props.product)}>
          <i className="fa-solid fa-cart-shopping"></i> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
