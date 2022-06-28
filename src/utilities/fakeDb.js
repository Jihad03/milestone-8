const addToLocalStorage = (id) => {
  let shoppingCart = {};
  // Checking if any cart exists in localstorage then making decisions
  const existingCart = localStorage.getItem("shoppingCart");
  if (existingCart) {
    shoppingCart = JSON.parse(existingCart);
  }

  // Checking if the item is exists, then making decisions
  const quantity = shoppingCart[id];
  if (quantity) {
    shoppingCart[id] = quantity + 1;
  } else {
    shoppingCart[id] = 1;
  }

  // Adding the product id to shopping cart
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
};

const getDataFromLocalStorage = () => {
  const cartData = localStorage.getItem("shoppingCart");
  return cartData ? JSON.parse(cartData) : {};
};

export { addToLocalStorage, getDataFromLocalStorage };
