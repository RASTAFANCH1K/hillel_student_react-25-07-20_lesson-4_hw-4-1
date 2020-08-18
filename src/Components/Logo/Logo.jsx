import React from 'react';

import styles from './Logo.module.scss';

import logo from './logo.svg';

const Logo = () => {
  return (
    <div className={ styles.logoWrap }>
      <img className={ styles.logo } src={ logo } alt="logo" />
    </div>
  )
};

export default Logo;