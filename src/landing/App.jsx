import React from 'react';
import LightThemeIcon from '@material-ui/icons/BrightnessHigh';
import DarkThemeIcon from '@material-ui/icons/Brightness4';


import './App.scss';

import Profile from './Profile';
import Skills from './Skills';
import Technology from './Technology';
import GetInTouch from './GetInTouch';
import Divider from './Divider';
import WorkExperience from './WorkExperience';
import Thankyou from './Thankyou';

class App extends React.Component {
  state = {
    isDarkTheme: true,
  }

  componentDidMount() {
    this.setTheme();
  }

  getAppTheme = () => {
    return this.state.isDarkTheme ? 'dark' : 'light';
  }

  setTheme = () => {
    const localTheme = localStorage.getItem('spTheme');
    if (localTheme && localTheme === 'dark') {
      this.setState({ isDarkTheme: true });
    }
    if (localTheme && localTheme === 'light') {
      this.setState({ isDarkTheme: false });
    }
  }

  toggleTheme = () => {
    if (this.state.isDarkTheme) {
      localStorage.setItem('spTheme', 'light');
      this.setState({ isDarkTheme: false });
    } else {
      localStorage.setItem('spTheme', 'dark');
      this.setState({ isDarkTheme: true });
    }
  }

  renderThemeIcon = () => {
    const { isDarkTheme } = this.state;
    return isDarkTheme ? <LightThemeIcon style={{ fontSize: 35, color: '#ffa800' }} /> : <DarkThemeIcon style={{ fontSize: 35, color: '#ffa800' }} />;
  }

  renderHeader = () => (
    <header className={this.getAppTheme()}>
      <div className="header-title highlight">Hi, I'm Siva</div>
      <button onClick={this.toggleTheme}>{this.renderThemeIcon()}</button>
    </header>
  );

  renderMain = () => (
    <div className="main">
      <Profile isDarkTheme={this.state.isDarkTheme} />
      <Divider />
      <Skills />
      <Divider />
      <Technology />
      <Divider />
      <WorkExperience />
      <Divider />
      <Thankyou />
    </div>
  );


  render() {
    const appTheme = this.getAppTheme();
    return (
      <div className={`full-height ${appTheme}`}>
        {this.renderHeader()}
        {this.renderMain()}
        <GetInTouch isDarkTheme={this.state.isDarkTheme} />
      </div>
    );
  }
}

export default App;
