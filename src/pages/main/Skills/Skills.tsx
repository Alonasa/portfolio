import React from 'react';
import { v1 } from 'uuid';
import logo from '../About/logo192.png'
import { Skill } from './Skill/Skill';
import styles from '../Skills/Skills.module.css'

const skills = [
  {id: v1(), logo: logo, title: 'html', description: 'this is description'},
  {id: v1(), logo: logo, title: 'css', description: 'this is description'},
  {id: v1(), logo: logo, title: 'React', description: 'this is description'},
  {id: v1(), logo: logo, title: 'Typescript', description: 'this is description'}

]

export const Skills = () => {
  return (
	<div className={styles.skills}>
	  <h2 className={styles.skillsTitle}>My skills</h2>
	  {skills.map(skill => {
	    return (
	      <Skill key={skill.id} id={skill.id} logo={skill.logo} title={skill.title} description={skill.description}/>
		)
	  })}
	  
	</div>
  );
};