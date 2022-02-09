// import logo from './logo.svg';
import '../css/listings.scss';
import '../css/index.scss';
import '../css/variables.scss';
import '../css/content-area.scss';
import Header from '../js/header.js';
import Filter from '../js/filter';
import Listings from '../js/listings';
import React from 'react';
import ReactDOM from 'react-dom';
import listingData from './data/listingData.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'David',
      listingData,

    }

    this.change = this.change.bind(this)
  }

  change(event) {
    var name = event.target.name
    var value = event.target.value

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
    })
  }

  render() {
    return (
      <div className='body'>
        <Header />
        <section id="content-area">
          <Filter change={this.change} />
          <Listings listingData={this.state.listingData} />
        </section>
      </div>
    )
  }
}

export default App;
