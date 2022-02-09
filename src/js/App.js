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
      city: 'All',
      homeType: 'All',
      rooms: 3,
      min_price: 0,
      max_price: 5000000,
      min_floor_space: 0,
      max_floor_space: 10000,
      elevator: false,
      swimming_pool: false,
      finished_basement: false,
      gym: false, 
      filteredData: listingData,
      populateFormsData: ''

    }

    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
  }

  change(event) {
    var name = event.target.name
    var value = (event.target.type === 'checkbox') ? event.target.checked :  event.target.value

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
      this.filteredData()
    })
  }

  filteredData(){
    var newData = this.state.listingData.filter ((item) => {
      return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space && item.rooms >= this.state.rooms
    })

    if(this.state.city !== 'All'){
      newData = newData.filter((item) => {
        return item.city == this.state.city
      })
    }

    if(this.state.homeType !== 'All'){
      newData = newData.filter((item) => {
        return item.homeType == this.state.homeType
      })
    }

    this.setState({
      filteredData: newData
    })
  }

  populateForms() {
    // city
    var cities = this.state.listingData.map(function (item) {
      return item.city
    })
    cities = new Set(cities)
    cities = [...cities]
    
    // homeType
    var homeType = this.state.listingData.map(function (item) {
      return item.homeType
    })
    homeType = new Set(homeType)
    homeType = [...homeType]

    // bedrooms
    var bedrooms = this.state.listingData.map(function (item) {
      return item.rooms
    })
    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]

    this.setState({
      populateFormsData: {
        homeType,
        bedrooms,
        cities
      }
    }, () => {
      console.log(this.state)
    })
  }

  render() {
    return (
      <div className='body'>
        <Header />
        <section id="content-area">
          <Filter change={this.change} globalState = {this.state} populateAction = {this.populateForms}/>
          <Listings listingData={this.state.filteredData} />
        </section>
      </div>
    )
  }
}

export default App;
