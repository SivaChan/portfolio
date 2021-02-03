import React from 'react';

import WebDeveloper from '../svg/web-developer.svg';

const Profile = ({ isDarkTheme }) => {
  const renderCompany = () => (
    <span>
      <a href="https://jinnss.com/" target="_blank" rel="noopener noreferrer" className={isDarkTheme ? 'dark' : 'light'}>
        @jinnss
      </a>
    </span>
  );

  const renderDesignation = () => (
    <div className="py-1">Web App Developer{' '} {renderCompany()}</div>
  );

  const renderExperience = () => <div className="py-1">3+ years of experience in web development</div>;

  const renderProfileContent = () => (
    <div className="profile-content">
      <div>
        <div className="profile-desc">
          {renderDesignation()}
          {renderExperience()}
        </div>
      </div>
    </div>
  );

  const renderProfileImage = () => (
    <div className="profile-image-comp">
      <img src={WebDeveloper} alt="Siva, The Web developer working" className="profile-image" />
    </div>
  );

  return (
    <div className="profile">
      {renderProfileContent()}
      {renderProfileImage()}
  </div>
  );
}

export default Profile;
