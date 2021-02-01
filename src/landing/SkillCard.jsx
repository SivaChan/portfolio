import React from 'react';

const SkillCard = (props) => (
  <div className="flex-center">
    <div className="skill-card">
      <div className="skill-title">{props.title}</div>
      <img src={props.img} alt={props.title} className="skill-image" />
    </div>
  </div>
);

export default SkillCard;
