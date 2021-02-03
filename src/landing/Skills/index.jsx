import React from 'react';

import SkillCard from './SkillCard';
import AnalyticsSkill from '../../svg/skills/analytics.svg';
import WebDeveloperSkill from '../../svg/skills/developer.svg';

const Skills = () => (
  <div className="skills">
    <div className="skills-title highlight">Skills</div>
    <div className="auto-fit">
      <SkillCard title="Web Development" img={WebDeveloperSkill} />
      <SkillCard title="Data Analyst" img={AnalyticsSkill} />
    </div>
  </div>
);

export default Skills;
