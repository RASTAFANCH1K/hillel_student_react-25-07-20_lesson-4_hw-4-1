import { productMocks } from '../../mocks/index';

import { 
  addProductUtil, 
  deleteProductUtil, 
  deleteSelectedProductsUtil, 
  updateProductUtil,
  calcTotalPriceUtil,
  calcSelectedTotalPriceUtil
} from '../../utils/productUtils';

const productState = {
  productList: productMocks,
  total: calcTotalPriceUtil(productMocks),
  selectedTotal: 0
};

const productReducer = (state = productState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'addProductAction': {
      const productList = addProductUtil(state.productList, payload);
      
      return {
        ...state,
        productList,
        total: calcTotalPriceUtil(productList),
        selectedTotal: calcSelectedTotalPriceUtil(productList)
      };
    }
    case 'deleteProductAction': {
      const productList = deleteProductUtil(state.productList, payload.id);

      return {
        ...state,
        productList,
        total: calcTotalPriceUtil(productList),
        selectedTotal: calcSelectedTotalPriceUtil(productList)
      };
    }
    case 'deleteSelectedProductsAction': {
      const productList = deleteSelectedProductsUtil(state.productList);

      return {
        ...state,
        productList,
        total: calcTotalPriceUtil(productList),
        selectedTotal: calcSelectedTotalPriceUtil(productList)
      };
    }
    case 'updateProductAction': {
      const productList = updateProductUtil(state.productList, payload);

      return {
        ...state,
        productList,
        total: calcTotalPriceUtil(productList),
        selectedTotal: calcSelectedTotalPriceUtil(productList)
      };
    }
    default:
      return state;
  }
};

export default productReducer;