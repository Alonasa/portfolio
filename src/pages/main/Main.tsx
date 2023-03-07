import React from 'react';
import {About} from './About/About';
import { Contacts } from './Contacts/Contacts';
import { Hire } from './Hire/Hire';
import { Portfolio } from './Portfolio/Portfolio';
import { Skills } from './Skills/Skills';
import  styles from '../main/Main.module.css'


export const Main = () => {
  return (
    <div className={styles.container}>
      <About/>
      <Skills/>
      <Portfolio/>
      <Hire/>
      <Contacts/>
    </div>
  );
};