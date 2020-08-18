import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { productActions } from '../../store/actions'

import { 
  Logo, 
  ProductList, 
  TotalCounter, 
  ProductForm 
} from '../';

import styles from './App.module.scss';

const App = ({ productActions }) => {
  const onDeleteSelectedProducts = useCallback(
    () => {
      productActions.deleteSelectedProductsAction();
    },
    [productActions]
  );

  return (
    <div className={ styles.container }>
      <Logo />
      <div className={ styles.title }>Fridge</div>
      <ProductList />
      <div className={ styles.btnRow }>
        <button className={ styles.btn } onClick={ onDeleteSelectedProducts }>Delete Selected</button>
        <TotalCounter />
      </div>
      <ProductForm />
    </div>
  )
};

App.defaultProps = {
  products: {},
  productActions: {}
};

App.propTypes = {
  products: PropTypes.shape({
    productList: PropTypes.array,
    total: PropTypes.number,
    selectedTotal: PropTypes.number
  }),
  productActions: PropTypes.object
};

export const mapStateToProps = ({ products }) => ({
  products
});

export const mapDispatchToProps = dispatch => ({
  productActions: bindActionCreators(productActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);