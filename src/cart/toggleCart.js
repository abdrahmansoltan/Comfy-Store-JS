import { getElement } from '../utils.js';

const cartOverlay = getElement('.cart-overlay');
const closeCartBtn = getElement('.cart-close');
const toggleCartBtn = getElement('.toggle-cart');

toggleCartBtn.addEventListener('click', () => {
  cartOverlay.classList.add('show');
});
closeCartBtn.addEventListener('click', () => {
  cartOverlay.classList.remove('show');
});
cartOverlay.addEventListener('click', e => {
  if (e.target.classList.contains('cart-overlay')) {
    cartOverlay.classList.remove('show');
  }
});

export const openCart = () => {
  cartOverlay.classList.add('show');
};
