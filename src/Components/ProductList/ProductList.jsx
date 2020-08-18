import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ProductItem } from '../';
import { mapStateToProps, mapDispatchToProps } from '../App/App';

import styles from './ProductList.module.scss';

const ProductList = ({ products }) => {
  const productList = products.productList;

  return (
    <div className={ styles.list }>
      <div className={ styles.titles }>
        <div className={ styles.title }>Product</div>
        <div className={ styles.title }>Description</div>
        <div className={ styles.title }>Category</div>
        <div className={ styles.title }>Price</div>
        <div className={ styles.title }></div>
      </div>
      { productList.map(product => <ProductItem key={ product.id } product={ product } />) }
    </div>
  )
};

ProductList.defaultProps = {
  products: { productList: [] },
  productActions: {}
};

ProductList.propTypes = {
  products: PropTypes.shape({
    productList: PropTypes.array
  }),
  productActions: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);