import display from '../displayProducts.js';
import { getElement } from '../utils.js';

const priceInput = getElement('.price-filter');
const priceValue = getElement('.price-value');
const productsContainer = getElement('.products-container');

const setupPrice = store => {
  // setup filter
  let prices = store.map(product => product.price);
  let maxPrice = Math.max(...prices);
  maxPrice = Math.ceil(maxPrice / 100);
  priceInput.value = maxPrice; // to include all products
  priceInput.max = maxPrice;
  priceInput.min = 0;
  priceValue.textContent = `Value : $${maxPrice}`;

  priceInput.addEventListener('input', function () {
    const value = parseInt(priceInput.value);
    priceValue.textContent = `Value : $${value}`; // update priceValue textContent

    let newStore = store.filter(product => product.price / 100 <= value);
    display(newStore, productsContainer, true);
    if (newStore.length < 1) {
      productsContainer.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
    }
  });
};

export default setupPrice;
