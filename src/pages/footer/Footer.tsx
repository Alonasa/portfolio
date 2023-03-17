import React from 'react';
import { v1 } from 'uuid';
import styles from '../footer/Footer.module.css'
import { Socials } from './socials/Socials';

const socials = [
  {id: v1(), title: 'Facebook'},
  {id: v1(), title: 'Linkedin'},
  {id: v1(), title: 'Github'},
]

export const Footer = () => {
  return (
	<div className={styles.footerFluid}>
	  <div className={'container'}>
		<div className={styles.footer}>
		  <h3 className={styles.footerTitle}>Alona Skrypnyk</h3>
		  <ul className={styles.footerSocials}>
			<Socials data={socials}/>
		  </ul>
		  <p className={styles.footerCopyright}>&copy;{` ${new Date().getFullYear()} All rights reserved`}</p></div>
		</div>
	</div>
  );
};