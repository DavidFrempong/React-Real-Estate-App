// Styles
import '../css/listings.scss';
import '../css/index.scss';
import '../css/variables.scss';

// Icons
import list_icon from '../icons/List.svg';
import menu_items_icon from '../icons/Menu Items.svg';
import person_sleeping from '../icons/Person Sleeping.svg';
import square from '../icons/Sqaure, Rounded.svg';
import location from '../icons/Location.svg'

// Body
import React from 'react';

export default class Listings extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'David',
        }
        let squared = "&sup2";
    }
    // Class
    render() {
        return (<section id='listings'>
            <section className='search-area'>
                <input type={"text"} name="search" />
            </section>

            <section className='sort-by-section'>
                <div className='results'>400 results found</div>
                <div className='sort-options'>
                    <select name="sort-by" className='sort-by'>
                        <option value="price-asc">Highest Price</option>
                        <option value="price-asc">Lowest Price</option>
                    </select>
                    <div className='view'>
                        <img src={list_icon} alt="List" className='view-icon'/>
                        <img src={menu_items_icon} alt="Menu Items" className='view-icon'/>
                    </div>
                </div>
            </section>

            <section className='listing-results'>
                <div className="listing">
                    <div className='listing-image'>
                        <span className='Address'>Address</span>
                        <div className='details'>
                            <div className='user-image'></div>
                            <div className='user-details'>
                                <span className='user-name'>Jessica Trige</span>
                                <span className='post-date'>Jan 1, 2022</span>
                            </div>
                            <div className='listing-details'>
                                <div className='floor-space'><img src={square} alt="Sqaure" /><span>1000 ft²</span></div>
                                <div className='bedroom'>
                                    <img src={person_sleeping} alt="Bedrooms" />
                                    <span>3 Bedrooms</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-info'>
                        <span>$1000 / month</span>
                        <span><img src={location} alt="Location" />Location: Sanford, Florida</span>
                    </div>
                </div>
            </section>

            <section className='pagination'>
                <ul className='pagination-numbers'>
                   <li>Previous</li>
                   <li>1</li>
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
