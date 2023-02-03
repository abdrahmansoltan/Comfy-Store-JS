const allProductsUrl = 'https://course-api.com/javascript-store-products';

// temporary single product
// 'https://course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl = 'https://course-api.com/javascript-store-single-product';

const getElement = selection => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`Please check "${selection}" selector, no such element exist`);
};

export { getElement, allProductsUrl, singleProductUrl };
