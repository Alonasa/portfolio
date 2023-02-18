import { NavLink } from 'react-router-dom';
import styles from './Header.module.css'

export const Header = () => {
  return (
	<nav className={styles.menu}>
	  <ul className={styles.menuList}>
	  <li><NavLink to={'skills'} className={({isActive})=>(isActive? styles.menuListLinkActive : styles.menuListLink)}> Skills</NavLink></li>
	  <li><NavLink to={'portfolio'} className={({isActive})=>(isActive? styles.menuListLinkActive : styles.menuListLink)}> Portfolio</NavLink></li>
	  </ul>
	  <div className={styles.menuLogo}>
		<h1 className={styles.menuTitle}><NavLink to={''} className={({isActive})=>(isActive? styles.menuListLinkActive : styles.menuListLink)}>Alona Skrypnyk</NavLink></h1>
	  </div>
	  <ul className={`${styles.menuList} ${styles.menuRight}`}>
		<li><NavLink to={'contacts'} className={({isActive})=>(isActive? styles.menuListLinkActive : styles.menuListLink)}> Contacts</NavLink></li>
		<li><NavLink to={'make an offer'} className={({isActive})=>(isActive? styles.menuListLinkActive : styles.menuListLink)}> Make an offer</NavLink></li>
	  </ul>
	</nav>
  );
};