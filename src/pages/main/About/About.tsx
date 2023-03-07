import React from 'react';
import logo192 from '../About/logo192.png';
import  styles from '../About/About.module.css'

export const About = () => {
  return (
	<div className={styles.about}>
	  <img className={styles.picture} src={logo192} alt={'Alona Skrypnyk photo'} width={300} height={500}/>
	  <p>Hello! My name Alona Skrypnyk, I am frontend developer</p>
	</div>
  );
};