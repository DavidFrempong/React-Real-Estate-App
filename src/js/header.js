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
          <div className='logo'>Lakeside</div>
          <nav>
              <a href="#" rel='noreferrer' target={"_blank"}>Buy</a>
              <a href="#" rel='noreferrer' target={"_blank"}>Rent</a>
              <a href="#" rel='noreferrer' target={"_blank"}>Sell</a>
              <a href="#" rel='noreferrer' target={"_blank"}>Contact Agent</a>
              <a href="#" className='register-button'>Sign In</a>
          </nav>
      </header>
    )
  }
}
