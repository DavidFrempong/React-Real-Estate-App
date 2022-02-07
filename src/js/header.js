// import logo from './logo.svg';
import '../css/listings.scss';
import '../css/index.scss';
import '../css/variables.scss';
import React from 'react';

export default class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'David',
    }
  }

  render() {
    return (
      <header>
          <div className='logo'>Logo</div>
          <nav>
              <a href="#" rel='noreferrer' target={"_blank"}>Create Ads</a>
              <a href="#" rel='noreferrer' target={"_blank"}>Create Ads</a>
              <a href="#" rel='noreferrer' target={"_blank"}>Create Ads</a>
              <a href="#" className='register-button'>Register</a>
          </nav>
      </header>
    )
  }
}
