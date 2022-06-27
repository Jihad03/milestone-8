import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
import Products from "../products/Products";
import "./Shop.css";

const Shop = () => {
  // Declaring states
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetching Data to display in the product section
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Handling Add to cart functionality
  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <section className="shop-section">
      <div className="products-container">
        {products.map((product) => (
          <Products
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </section>
  );
};

export default Shop;
