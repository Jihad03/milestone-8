import React, { useEffect, useState } from "react";
import {
  addToLocalStorage,
  getDataFromLocalStorage,
} from "../../utilities/fakeDb";
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
    addToLocalStorage(product.id);
  };

  // Fetching Data from localStorage to display in the cart ui
  useEffect(() => {
    if (products.length) {
      const storedData = getDataFromLocalStorage();
      const temporaryCart = [];
      for (const key in storedData) {
        const addedProduct = products.find(
          (product) => product.id === parseInt(key)
        );
        if (addedProduct) {
          addedProduct.quantity = storedData[key];
          temporaryCart.push(addedProduct);
        }
      }
      setCart(temporaryCart);
    }
  }, [products]);

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
