export const addProductAction = product => ({
  type: 'addProductAction',
  payload: product
});

export const deleteProductAction = product => ({
  type: 'deleteProductAction',
  payload: product
});

export const deleteSelectedProductsAction = () => ({
  type: 'deleteSelectedProductsAction',
  payload: {}
});

export const updateProductAction = product => ({
  type: 'updateProductAction',
  payload: product
});
