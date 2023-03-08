import React from 'react';
import styles from '../Project/Project.module.css'


export const Project = () => {
  return (
	<li className={styles.project}>
	  <a href={'#'}>
	  <div className={styles.projectInner}>
		<h3 className={styles.projectTitle}>Todolist</h3>
		<p className={styles.projectDescription}>Todolist is a simple project helps you to mannage your schedle and being more productive</p>
	  	<div>
		  Technologies: html, css, React, Typescript, MUI
		</div>
	  </div>
	  </a>
	</li>
  );
};