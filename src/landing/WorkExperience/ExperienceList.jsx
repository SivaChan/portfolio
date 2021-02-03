import React from 'react';
import DateRangeIcon from '@material-ui/icons/DateRange';
import WorkIcon from '@material-ui/icons/Work';
import BusinessIcon from '@material-ui/icons/Business';

const ExperienceList = ({ year, title, company }) => (
  <div className="p-1">
    <div className="flex-start py-3px">
      <DateRangeIcon />
      <div className="px-5">{year}</div>
    </div>
    <div className="flex-start py-3px">
      <WorkIcon />
      <div className="px-5">{title}</div>
    </div>
    <div className="flex-start py-3px">
      <BusinessIcon />
      <div className="px-5">{company}</div>
    </div>
  </div>
);

export default ExperienceList;