// import logo from './logo.svg';
import React from 'react'
import ReactDOM from 'react-dom'

import '../css/listings.scss'
import '../css/index.scss'
import '../css/variables.scss'
import '../css/content-area.scss'
import Header from '../js/header.js'
import Filter from '../js/filter'
import Listings from '../js/listings'
import listingData from './data/listingData.js'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe',
      listingData,
      city: 'All',
      homeType: 'All',
      bedrooms: '0',
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elavator: false,
      finished_basement: false,
      gym: false,
      swimming_pool: false,
      filteredData: listingData,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'box',
      search: ''
    }

    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
    this.changeView = this.changeView.bind(this)
  }
  componentDidMount() {

    var listingData = this.state.listingData.sort((a, b) => {
      return a.price - b.price
    })

    this.setState({
      listingData
    })
  }
  change(event) {
    var name = event.target.name
    var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state)
      this.filteredData()
    })
  }
  changeView(viewName) {
    this.setState({
      view: viewName
    })
  }

  filteredData() {
    var newData = this.state.listingData.filter((item) => {
      return item.price >= this.state.min_price && item.price <= this.state.max_price && item.floorSpace >= this.state.min_floor_space && item.floorSpace <= this.state.max_floor_space && item.rooms >= this.state.bedrooms
    })

    if (this.state.city != "All") {
      newData = newData.filter((item) => {
        return item.city == this.state.city
      })
      console.log(newData)
    }

    if (this.state.homeType != "All") {
      newData = newData.filter((item) => {
        return item.homeType == this.state.homeType
      })
    }

    if (this.state.sort_by == 'price-dsc') {
      newData = newData.sort((a, b) => {
        return a.price - b.price
      })
    }

    if (this.state.sort_by == 'price-asc') {
      newData = newData.sort((a, b) => {
        return b.price - a.price
      })
    }

    if (this.state.search != '') {
      newData = newData.filter((item) => {
        var city = item.city.toLowerCase()
        var searchText = this.state.search.toLowerCase()
        var n = city.match(searchText)

        if (n != null) {
          return true
        }
      })
    }



    this.setState({
      filteredData: newData
    })
  }
  populateForms() {
    // city
    var cities = this.state.listingData.map((item) => {
      return item.city
    })
    cities = new Set(cities)
    cities = [...cities]

    cities = cities.sort()
    console.log(cities)



    // homeType
    var homeTypes = this.state.listingData.map((item) => {
      return item.homeType
    })
    homeTypes = new Set(homeTypes)
    homeTypes = [...homeTypes]

    homeTypes = homeTypes.sort()

    // bedrooms
    var bedrooms = this.state.listingData.map((item) => {
      return item.rooms
    })
    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]

    bedrooms = bedrooms.sort()

    this.setState({
      populateFormsData: {
        homeTypes,
        bedrooms,
        cities
      }
    }, () => {
      console.log(this.state)
    })

  }

  render() {
    return (<div>
      <Header />
      <section id="content-area">
        <Filter change={this.change} globalState={this.state} populateAction={this.populateForms} />
        <Listings listingData={this.state.filteredData} change={this.change} globalState={this.state} changeView={this.changeView} />
      </section>
    </div>)
  }
}

export default App

