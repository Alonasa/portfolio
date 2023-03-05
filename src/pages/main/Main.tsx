import React from 'react';
import {About} from './About/About';
import { Contacts } from './Contacts/Contacts';
import { Hire } from './Hire/Hire';
import { Portfolio } from './Portfolio/Portfolio';
import { Skills } from './Skills/Skills';

export const Main = () => {
  return (
    <div>
      <About/>
      <Skills/>
      <Portfolio/>
      <Hire/>
      <Contacts/>
    </div>
  );
};