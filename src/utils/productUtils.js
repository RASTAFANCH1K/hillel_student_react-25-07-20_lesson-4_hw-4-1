import { v4 as uuidv4 } from 'uuid';

export const addProductUtil = (products, productProperties) => {
  const product = {
    id: uuidv4(),
    ...productProperties
  };

  return [ ...products, product ];
};

export const deleteProductUtil = (products, id) => (
  products.filter(product => product.id !== id)
);

export const deleteSelectedProductsUtil = products => (
  products.filter(product => !product.selected)
);

export const updateProductUtil = (products, productProperties) => (
  products.map(product => product.id === productProperties.id ? productProperties : product)
);

export const calcTotalPriceUtil = products => (
  products.reduce((total, { price }) => total + parseFloat(price), 0)
);

export const calcSelectedTotalPriceUtil = products => (
  products
    .filter(({ selected }) => selected)
    .reduce((total, { price }) => total + parseFloat(price), 0)
);

export const isNumUtil = input => !isNaN(input);