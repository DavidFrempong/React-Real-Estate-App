import '../css/listings.scss';
import '../css/index.scss';
import '../css/variables.scss';
import React from 'react';

export default class Filter extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'David',
        }
        this.cities = this.cities.bind(this)
        this.homeType = this.homeType.bind(this)
        this.bedrooms = this.bedrooms.bind(this)
    }

    componentWillMount() {
        this.props.populateAction()
    }

    cities() {
        if (this.props.globalState.populateFormsData.cities != undefined) {
            var { cities } = this.props.globalState.populateFormsData
            console.log(cities)
            return cities.map((item) => {
                return (
                    <option key={item} value={item}>{item}</option>
                )
            })
        }
    }

    homeType() {
        if (this.props.globalState.populateFormsData.homeType != undefined) {
            var { homeType } = this.props.globalState.populateFormsData
            console.log(homeType)
            return homeType.map((item) => {
                return (
                    <option key={item} value={item}>{item}</option>
                )
            })
        }
    }

    bedrooms() {
        if (this.props.globalState.populateFormsData.bedrooms != undefined) {
            var { bedrooms } = this.props.globalState.populateFormsData
            console.log(bedrooms)
            return bedrooms.map((item) => {
                return (
                    <option key={item} value={item}>{item} + Bedrooms</option>
                )
            })
        }
    }


    render() {
        return (<section id='filter'>

            {/* Filter */}

            <div className='inside-content'>
                <h4>Filter</h4>

                <label htmlFor='city' className='filterlabel'>City</label>
                <select name="city" className='filter city' onChange={this.props.change}>
                    <option value='All'>All</option>
                    {this.cities()}
                </select>

                <label htmlFor='city'  className='filterlabel'>Type of Home</label>
                <select name="homeType" className='filter homeType' onChange={this.props.change}>
                    <option value="All">All Hometypes</option>
                    {this.homeType()}
                </select>

                <label htmlFor='city' className='filterlabel'># of Bedrooms</label>
                <select name="rooms" className='filter bedrooms' onChange={this.props.change}>
                    {this.bedrooms()}
                </select>

                <div className='filter price'>
                    <span className='title'>Price</span>
                    <input type={"text"} name='min_price' value={this.props.globalState.min_price} className='min-price' onChange={this.props.change} />
                    <input type={"text"} name='max_price' value={this.props.globalState.max_price} className='max-price' onChange={this.props.change} />
                </div>

                <div className='filter floor-space'>
                    <span className='title'>Floor Space</span>
                    <input type={"text"} name='min_floor_space' value={this.props.globalState.min_floor_space} className='min-floor-space' onChange={this.props.change} />
                    <input type={"text"} name='max_floor_space' value={this.props.globalState.max_floor_space} className='max-floor-space' onChange={this.props.change} />
                </div>

                <div className='filter extra-features'>
                    <span className='title'>Extra Features</span>
                    <label htmlFor="extra-features"><span>Elevators</span>
                        <input type="checkbox" name="elevator" value="elevator" onChange={this.props.change} />
                    </label>
                    <label htmlFor="extra-features"><span>Swimming Pool</span>
                        <input type="checkbox" name="swimming_pool" value="swimming_pool" onChange={this.props.change} />
                    </label>
                    <label htmlFor="extra-features"><span>Finished Basement</span>
                        <input type="checkbox" name="finished_basement" value="finished_basement" onChange={this.props.change} />
                    </label>
                    <label htmlFor="extra-features"><span>Gym</span>
                        <input type="checkbox" name="gym" value="gym" onChange={this.props.change} />
                    </label>
                </div>
            </div>
        </section>
        )
    }
}