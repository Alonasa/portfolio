import React from 'react';
import styles from '../Contacts/Contacts.module.css'

export const Contacts = () => {
  return (
	<div className={styles.contactsFluid}>
	  <div className={'container'}>
		<h3>Contact</h3>
		<form className={styles.contacts}>
			<div className={styles.contactsSender}>
			  <label className={styles.contactsLabel}>Name:
				<input className={styles.contactsInput} type={'text'}/>
			  </label>
			  <label className={styles.contactsLabel}>E-mail:
				<input className={styles.contactsInput} type={'email'}/>
			  </label>
			</div>
		  <textarea className={styles.contactsTextarea} rows={5} placeholder={'Leave your message here'}/>
		  <input className={`${styles.contactsButton} button`} type={"submit"} value={"Submit"}/>
		</form>
	  </div>
	</div>
  );
};