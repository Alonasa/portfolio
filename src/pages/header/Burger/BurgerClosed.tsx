import React from 'react';
import styles from './Burger.module.css';

export const BurgerClosed = () => {
  return (
	<div className={styles.hamburgerLines}>
	  <span className={`${styles.line}`}></span>
	  <span className={`${styles.line}`}></span>
	  <span className={`${styles.line}`}></span>
	</div>
  );
};