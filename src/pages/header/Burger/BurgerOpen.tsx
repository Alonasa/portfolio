import React from 'react';
import styles from './Burger.module.css';

export const BurgerOpen = () => {
  return (
	<div className={styles.hamburgerLines}>
	  <span className={`${styles.line} ${styles.line1}`}></span>
	  <span className={`${styles.line} ${styles.line2}`}></span>
	</div>
  );
};