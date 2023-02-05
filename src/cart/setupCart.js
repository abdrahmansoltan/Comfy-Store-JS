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
    const amount = 1; // TEMP
    const items = [...cartItemsDOM.querySelectorAll('.cart-item-amount')];
    const newAmount = items.find(value => value.dataset.id === id);
    newAmount.textContent = amount;
  }
  // add one to the item count

  // display cart totals
  
  // set cart in local storage
  setStorageItem('cart', cart);
  openCart();
};
