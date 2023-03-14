import React from 'react';
import styles from '../Project/Project.module.css'


export const Project = () => {
  return (
	<li className={styles.project}>
	  <div className={styles.projectPicture}>
		<a className={styles.projectButton}>Details</a>
	  </div>
	  <div className={styles.projectInner}>
		<h3 className={styles.projectTitle}>Todolist</h3>
		<p className={styles.projectDescription}>Todolist is a simple project helps you to mannage your schedle and being more productive</p>
	  	<div>
		  Technologies: <a href={''}>HTML</a>, <a href={''}>CSS</a>, <a href={''}>React</a>, <a href={''}>Typescript</a>, <a href={''}>MUI</a>
		</div>
	  </div>
	</li>
  );
};