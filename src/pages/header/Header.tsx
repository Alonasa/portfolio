import React from 'react';
import styles from './Header.module.css'

export const Header = () => {
  return (
	<nav className={styles.menu}>
	  <ul className={styles.menuList}>
	  <li><a className={styles.menuListLink} href={'#'}> Skills</a></li>
	  <li><a className={styles.menuListLink} href={'#'}> Portfolio</a></li>
	  </ul>
	  <div className={styles.menuTitle}>
		<h1><a className={styles.menuListLink}>Alona Skrypnyk</a></h1>
	  </div>
	  <ul className={styles.menuList}>
		<li><a className={styles.menuListLink} href={'#'}> Contacts</a></li>
		<li><a className={styles.menuListLink} href={'#'}> Make an offer</a></li>
	  </ul>
	</nav>
  );
};