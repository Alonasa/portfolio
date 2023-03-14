import React from 'react';
import styles from '../Portfolio/Portfolio.module.css'
import { Project } from './Project/Project';

export const Portfolio = () => {
  return (
	<div className={styles.portfolio}>
	  <h2 className={styles.portfolioTitle}>My Projects</h2>
	  <ul className={styles.portfolioList}>
		<Project/>
		<Project/>
		<Project/>
	  </ul>
	</div>
  );
};