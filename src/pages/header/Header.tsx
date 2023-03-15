import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { BurgerClosed } from './Burger/BurgerClosed';
import { BurgerOpen } from './Burger/BurgerOpen';
import styles from './Header.module.css'

export const Header = () => {
  const [open, setOpen] = useState(true)
  
  const setMenuClose = () => {
	setOpen(!open)
  }
  
  return (
	<div className={'container'}>
	  <nav className={styles.menu}>
		<div className={styles.menuBurger} onClick={setMenuClose}>
		  {open ? <BurgerOpen/> : <BurgerClosed/>}
		</div>
		
		{open && <ul className={`${styles.menuList} ${styles.menuLeft}`}>
          <li><NavLink to={'skills'}
                       className={({isActive}) => (isActive ? styles.menuListLinkActive : styles.menuListLink)}>Skills</NavLink>
          </li>
          <li><NavLink to={'portfolio'}
                       className={({isActive}) => (isActive ? styles.menuListLinkActive : styles.menuListLink)}>Portfolio</NavLink>
          </li>
        </ul>}
		<div className={styles.menuLogo}>
		  <h1 className={styles.menuTitle}><NavLink to={''} className={(isActive) => (isActive && styles.menuListLink)}>Alona
			Skrypnyk</NavLink></h1>
		</div>
		{open && <ul className={`${styles.menuList} ${styles.menuRight}`}>
          <li><NavLink to={'contacts'}
                       className={({isActive}) => (isActive ? styles.menuListLinkActive : styles.menuListLink)}> Contacts</NavLink>
          </li>
          <li><NavLink to={'make an offer'}
                       className={({isActive}) => (isActive ? styles.menuListLinkActive : styles.menuListLink)}> Make
            an offer</NavLink></li>
        </ul>}
	  </nav>
	</div>
  );
};