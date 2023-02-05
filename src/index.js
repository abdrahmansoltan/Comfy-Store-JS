// global imports
import './cart/setupCart.js';
import './cart/toggleCart.js';
import './toggleSidebar.js';
// specific imports
import display from './displayProducts.js';
import fetchProducts from './fetchProducts.js';
import { setupStore, store } from './store.js';
import { getElement } from './utils.js';

const init = async () => {
  const products = await fetchProducts();
  if (products) {
    // add products to the store (local storage)
    setupStore(products);
    const featured = store.filter(product => product.featured === true);
    display(featured, getElement('.featured-center'));
  }
};

window.addEventListener('DOMContentLoaded', init);
