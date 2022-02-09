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
    }

    render() {
        return (<section id='filter'>

            {/* Filter */}

            <div className='inside-content'>
                <h4>Filter</h4>
                <select name="neighborhood" className='filter neighborhood' onChange={this.props.change}>
                    <option value="Sanford">Sanford</option>
                    <option value="Deland">Deland</option>
                    <option value="Winter Haven">Winter Haven</option>
                    <option value="Altamonte Springs">Altamonte Springs</option>
                    <option value="Orlando">Orlando</option>
                </select>
                <select name="type-of-home" className='filter hometype' onChange={this.props.change}>
                    <option value="Single-Family">Single-Family</option>
                    <option value="Multi-Family">Multi-Family</option>
                    <option value="Studio">Studio</option>
                </select>
                <select name="number-of-rooms" className='filter bedrooms' onChange={this.props.change}>
                    <option value="3">3 Bed</option>
                    <option value="4">4 Bed</option>
                    <option value="5">5 Bed</option>
                    <option value="6">6 Bed</option>
                </select>

                <div className='filter price'>
                    <span className='title'>Price</span>
                    <input type={"text"} name='min_price' value = {this.props.globalState.min_price} className='min-price' onChange={this.props.change} />
                    <input type={"text"} name='max_price' value={this.props.globalState.max_price} className='max-price' onChange={this.props.change} />
                </div>

                <div className='filter floor-space'>
                    <span className='title'>Floor Space</span>
                    <input type={"text"} name='min_floor_space' value = {this.props.globalState.min_floor_space} className='min-floor-space' onChange={this.props.change} />
                    <input type={"text"} name='max_floor_space' value = {this.props.globalState.max_floor_space} className='max-floor-space' onChange={this.props.change} />
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