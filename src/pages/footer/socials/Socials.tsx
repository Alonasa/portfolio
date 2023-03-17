import React from 'react';
import styles from '../socials/Socials.module.css'


type SocialType = {
  id: string
  title: string
}

type SocialsType = {
  data: Array<SocialType>
}


export const Socials = (props: SocialsType) => {
  return (
	<>{props.data.map(d => {
	  return <li className={styles.social} key={d.id}><a href={''}>{d.title}</a></li>
	})}
	</>
  )
  
};