// import
import { findProduct } from '../store.js';
import { formatPrice, getElement, getStorageItem, setStorageItem } from '../utils.js';
import addToCartDOM from './addToCartDOM.js';
import { openCart } from './toggleCart.js';

const cartItemCountDOM = getElement('.cart-item-count');
const cartItemsDOM = getElement('.cart-items');
const cartTotalDOM = getElement('.cart-total');

let cart = getStorageItem('cart'); // cartArray or []

export const addToCart = id => {
  let item = cart.find(cartItem => cartItem.id === id);

  // 1. If item is not in the cart
  if (!item) {
    let product = findProduct(id);
    // add item to the cart
    product = { ...product, amount: 1 };
    cart = [...cart, product]; // add item to cart array
    addToCartDOM(product);
  } else {
    // 2. If item already exists in the cart
    // Update values
    const amount = increaseAmount(id);
    const items = [...cartItemsDOM.querySelectorAll('.cart-item-amount')];
    const newAmount = items.find(value => value.dataset.id === id);
    newAmount.textContent = amount;
  }
  // add one to the item count
  displayCartItemCount();
  // display cart totals
  displayCartTotal();
  // set cart in local storage
  setStorageItem('cart', cart);
  openCart();
};

// ---------------- utils ---------------- //
function displayCartItemCount() {
  const amount = cart.reduce((total, cartItem) => {
    return (total += cartItem.amount); // amount is how many items
  }, 0);
  cartItemCountDOM.textContent = amount;
}
function displayCartTotal() {
  let total = cart.reduce((total, cartItem) => {
    return (total += cartItem.price * cartItem.amount);
  }, 0);
  cartTotalDOM.textContent = `Total : ${formatPrice(total)} `;
}
function displayCartItemsDOM() {
  cart.forEach(cartItem => {
    addToCartDOM(cartItem);
  });
}
function removeItem(id) {
  cart = cart.filter(cartItem => cartItem.id !== id);
}
function increaseAmount(id) {
  let newAmount;
  cart = cart.map(cartItem => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount + 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}
function decreaseAmount(id) {
  let newAmount;
  cart = cart.map(cartItem => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount - 1;
      cartItem = { ...cartItem, amount: newAmount };
    }
    return cartItem;
  });
  return newAmount;
}

// starter function to call all functions on every page load
const init = () => {
  // display amount of cart items
  displayCartItemCount();
  // display total
  displayCartTotal();
  // add all cart items to the dom
  displayCartItemsDOM();
  // setup cart functionality
};
init();
