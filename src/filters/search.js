import display from '../displayProducts.js';
import { getElement } from '../utils.js';

const form = getElement('.input-form');
const nameInput = getElement('.search-input');
const productsContainer = getElement('.products-container');

const setupSearch = store => {
  form.addEventListener('keyup', function () {
    const value = nameInput.value.trim();
    if (value) {
      const newStore = store.filter(product => {
        let { name } = product;
        if (name.toLowerCase().startsWith(value)) {
          return product;
        }
      });
      display(newStore, productsContainer, true);

      //  Empty State
      if (newStore.length < 1) {
        productsContainer.innerHTML = `
        <h3 class="filter-error">
          sorry, no products matched your search
        </h3>
        `;
      }
    } else {
      // if no input by user
      display(store, productsContainer, true);
    }
  });
};

export default setupSearch;
