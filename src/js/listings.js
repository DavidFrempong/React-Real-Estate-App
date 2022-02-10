// Styles
import '../css/listings.scss';
import '../css/index.scss';
import '../css/variables.scss';

// Icons
import list_icon from '../icons/List.svg';
import menu_items_icon from '../icons/Menu Items.svg';
import person_sleeping from '../icons/Person Sleeping, White.svg';
import square from '../icons/Square, Rounded (White).svg';
import location from '../icons/Location, Grey.svg'

// Body
import React from 'react';

export default class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'David',
        }
        // let squared = "&sup2";
        this.loopListings = this.loopListings.bind(this)
    }

    loopListings() {
        var { listingData } = this.props

        if (listingData == undefined || listingData.length === 0) {
            return "Sorry, your request did not match any results."
        }

        return listingData.map((listing, index) => {
            if (this.props.globalState.view == 'box') {
                // This is the "box" view
                return (<div className='col-3' key={index}>
                    <div className="listing">
                        <div className='listing-image' style={{
                            background: `url("${listing.image}") no-repeat
                center center`}}>
                            <span className='address'>{listing.address}</span>
                            <div className='details'>
                                <div className='col-3'>
                                    <div className='user-image'></div>
                                </div>
                                <div className='col-9'>
                                    <div className='user-details'>
                                        <span className='user-name'>Jessica Trige</span>
                                        <span className='post-date'>Jan 1, 2022</span>
                                    </div>
                                    <div className='listing-details'>
                                        <div className='floor-space'>
                                            <img src={square} alt="Sqaure" />
                                            <span>{listing.floorSpace} ft²</span>
                                        </div>
                                        <div className='bedroom'>
                                            <img src={person_sleeping} alt="Bedrooms" />
                                            <span>{listing.rooms} Bedrooms</span>
                                        </div>
                                    </div>

                                    <div className='view-button'>
                                        View Listing
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-info'>
                            <span className='price'>${listing.price} /year</span>
                            <span className='location'><img src={location} alt="Location" />Location: {listing.city}, {listing.state}</span>
                        </div>
                    </div>
                </div>)
            } else {
                // This is the "long" view
                return (<div className='col-12 col-lg-6' key={index}>
                    <div className="listing">
                        <div className='listing-image' style={{
                            background: `url("${listing.image}") no-repeat
                center center`}}>
                            <span className='address'>{listing.address}</span>
                            <div className='details'>
                                <div className='col-3'>
                                    <div className='user-image'></div>
                                </div>
                                <div className='col-9'>
                                    <div className='user-details'>
                                        <span className='user-name'>Jessica Trige</span>
                                        <span className='post-date'>Jan 1, 2022</span>
                                    </div>
                                    <div className='listing-details'>
                                        <div className='floor-space'>
                                            <img src={square} alt="Sqaure" />
                                            <span>{listing.floorSpace} ft²</span>
                                        </div>
                                        <div className='bedroom'>
                                            <img src={person_sleeping} alt="Bedrooms" />
                                            <span>{listing.rooms} Bedrooms</span>
                                        </div>
                                    </div>

                                    <div className='view-button'>
                                        View Listing
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-info'>
                            <span className='price'>${listing.price} /year</span>
                            <span className='location'><img src={location} alt="Location" />Location: {listing.city}, {listing.state}</span>
                        </div>
                    </div>
                </div>)
            }
        })
    }

    // Class
    render() {
        return (<section id='listings'>
            <section className='search-area'>
                <input type={"text"} name="search" onChange={this.props.change} />
            </section>

            <section className='sort-by-section'>
                <div className='results'>{this.props.globalState.filteredData.length} result(s) found</div>
                <div className='sort-options'>
                    <select name="sort_by" className='sort_by' onChange={this.props.change}>
                        <option value="price_asc">Lowest Price</option>
                        <option value="price_dsc">Highest Price</option>
                    </select>
                    <div className='view'>
                        <img src={list_icon} alt="List" className='view_icon' onClick={this.props.changeView.bind(null, 'box')} />
                        <img src={menu_items_icon} alt="Menu Items" className='view_icon' onClick={this.props.changeView.bind(null, 'long')} />
                    </div>
                </div>
            </section>

            <section className='listing-results'>

                <div className='row'>
                    {this.loopListings()}
                </div>

            </section>

            <section id='pagination'>

                <ul className='pages'>
                    <li>Previous</li>
                    <li className='active'>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>Next</li>
                </ul>
            </section>

        </section>
        )
    }
}
