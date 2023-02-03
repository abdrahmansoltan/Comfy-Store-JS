const allProductsUrl = 'https://course-api.com/javascript-store-products';

// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl = 'https://course-api.com/javascript-store-single-product';

const getElement = selection => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`Please check "${selection}" selector, no such element exist`);
};

// --------- LOCAL STORAGE --------- //
const getStorageItem = item => {
  let storageItem = localStorage.getItem(item);
  if (storageItem) {
    storageItem = JSON.parse(localStorage.getItem(item));
  } else {
    storageItem = [];
  }
  return storageItem;
};

const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

// --------- Product Utils --------- //
const formatPrice = price => {
  // price is in cents, we convert it to dollars ($)
  let formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format((price / 100).toFixed(2));
  return formattedPrice;
};

export {
  getElement,
  allProductsUrl,
  singleProductUrl,
  getStorageItem,
  setStorageItem,
  formatPrice
};
