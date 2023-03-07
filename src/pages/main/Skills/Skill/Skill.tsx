import React from 'react';

type SkillType = {
  id: string
  logo: string
  title: string
  description: string
}

export const Skill = (props: SkillType) => {
  return (
	<div key={props.id}>
	  <img src={props.logo} width={100} height={100} alt={props.title}></img>
	  <h3>{props.title}</h3>
	  <p>{props.description}</p>
	</div>
  );
};