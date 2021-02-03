import React from 'react';

import ExperienceList from './ExperienceList';

const WorkExperience = () => (
  <div className="skills">
    <div className="skills-title highlight">Work Experience</div>
    <div className="flex-center">
      <div>
        <ExperienceList year="2018 - Present" title="Web Developer" company="JINNSS" />
        <ExperienceList year="2017 - 2018" title="Data Analyst" company="JINNSS" />
        <ExperienceList year="2015 - 2017" title="Software Application Tester" company="HTC Global Service" />
        <ExperienceList year="2012 - 2015" title="Client Requirement Specialist" company="HTC Global Service" />
      </div>
    </div>
  </div>
);

export default WorkExperience;