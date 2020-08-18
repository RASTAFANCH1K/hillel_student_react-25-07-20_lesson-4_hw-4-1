import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from '../App/App';

import styles from './TotalCounter.module.scss';

const TotalCounter = ({ products }) => {
  const { productList, total, selectedTotal } = products;

  return (
    <div className={ styles.counterWrap }>
      <div className={ styles.totalWrap }>
        <div className={ `${ styles.total } ${ styles.totalTitle }` }>Total:</div>
        <div className={ `${ styles.total } ${ styles.totalNum }` }>{ total }</div>
      </div>
      <div className={ styles.totalWrap }>
        <div className={ `${ styles.total } ${ styles.totalTitle }` }>Selected Total:</div>
        <div className={ `${ styles.total } ${ styles.totalNum }` }>{ selectedTotal }</div>
      </div>
      <div className={ styles.totalWrap }>
        <div className={ `${ styles.total } ${ styles.totalTitle }` }>Amount:</div>
        <div className={ `${ styles.total } ${ styles.totalNum }` }>{ productList.length }</div>
      </div>
    </div>
  )
};

TotalCounter.defaultProps = {
  products: {},
  productActions: {}
};

TotalCounter.propTypes = {
  products: PropTypes.shape({
    productList: PropTypes.array,
    total: PropTypes.number,
    selectedTotal: PropTypes.number
  }),
  productActions: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(TotalCounter);