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
                <select name="neighborhood" className='filter neighborhood'>
                    <option>Sanford</option>
                </select>
                <select name="type-of-home" className='filter neighborhood'>
                    <option>Single-Family</option>
                </select>
                <select name="number-of-rooms" className='filter neighborhood'>
                    <option>4 Bed</option>
                </select>

                <div className='filter price'>
                    <span className='title'>Price</span>
                    <input type={"text"} name='min-price' className='min-price' />
                    <input type={"text"} name='max-price' className='max-price' />
                </div>

                <div className='filter floor-space'>
                    <span className='title'>Floor Space</span>
                    <input type={"text"} name='min-floor-space' className='min-floor-space' />
                    <input type={"text"} name='max-floor-space' className='max-floor-space' />
                </div>

                <div className='filter extra-features'>
                    <span className='title'>Extra Features</span>
                    <label for="extra-features"><span>Elevators</span>
                        <input type="checkbox" name="extra-features" value="elevator" />
                    </label>
                    <label for="extra-features"><span>Swimming Pool</span>
                        <input type="checkbox" name="extra-features" value="swimming-pool" />
                    </label>
                    <label for="extra-features"><span>Finished Basement</span>
                        <input type="checkbox" name="extra-features" value="finished-basement" />
                    </label>
                    <label for="extra-features"><span>Gym</span>
                        <input type="checkbox" name="extra-features" value="gym" />
                    </label>
                </div>
            </div>
        </section>
        )
    }
}