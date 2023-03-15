import React from 'react';
import styles from '../Hire/Hire.module.css'


export const Hire = () => {
  return (
	<div className={styles.hireFluid}>
	  <div className={`${styles.hire} container`}>
		  <h3>Looking into remote work options</h3>
		  <button className={'button'}>Hire me</button>
	  </div>
	</div>
  );
};