// import logo from './logo.svg';
import '../css/listings.scss';
import '../css/index.scss';
import '../css/variables.scss';
import '../css/content-area.scss';
import Header from '../js/header.js';
import Filter from '../js/filter';
import Listings from '../js/listings';
import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'David',
      rate: 100
    }
  }

  render() {
    return (
      <div className='body'>
        <Header />
        <section id="content-area">
          <Filter />
          <Listings />
        </section>
      </div>
    )
  }
}

export default App;
