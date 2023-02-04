// global imports
import '../cart/toggleCart.js';
import '../toggleSidebar.js';

//  filter imports
import setupCompanies from '../filters/companies.js';
import setupPrice from '../filters/price.js';
import setupSearch from '../filters/search.js';

// specific imports
import display from '../displayProducts.js';
import { store } from '../store.js';
import { getElement } from '../utils.js';

const loading = getElement('.page-loading');

display(store, getElement('.products-container'));

setupSearch(store);
setupCompanies(store);
setupPrice(store);

loading.style.display = 'none';
