import display from '../displayProducts.js';
import { getElement } from '../utils.js';

const companiesDOM = getElement('.companies');
const productsContainer = getElement('.products-container');

// Get unique companies
const setupCompanies = store => {
  let companies = ['all', ...new Set(store.map(product => product.company))];
  companiesDOM.innerHTML = companies
    .map(company => {
      return ` <button class="company-btn">${company}</button>`;
    })
    .join('');

  companiesDOM.addEventListener('click', function (e) {
    companiesDOM.querySelectorAll('.company-btn').forEach(companyBtn => {
      companyBtn.classList.remove('btn--active');
    });
    const element = e.target;
    // event bubbling
    if (element.classList.contains('company-btn')) {
      let newStore = [];
      if (element.textContent === 'all') {
        newStore = [...store];
      } else {
        element.classList.add('btn--active');
        newStore = store.filter(product => product.company === element.textContent);
      }

      display(newStore, productsContainer, true);
    }
  });
};

export default setupCompanies;
