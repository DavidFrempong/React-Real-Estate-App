// Styles
import '../css/listings.scss';
import '../css/index.scss';
import '../css/variables.scss';

// Icons
import list_icon from '../icons/List.svg';
import menu_items_icon from '../icons/Menu Items.svg'

// Body
import React from 'react';

export default class Listings extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'David',
        }
    }

    render() {
        return (<section className='listings'>
            <section className='search-area'>
                <input type={"text"} name="search" />
            </section>

            <section className='sort-by-section'>
                <div>400 results found</div>
                <div className='sort-options'>
                    <select name="sort-by" className='sort-by'>
                        <option value="price-asc">Highest Price</option>
                        <option value="price-asc">Lowest Price</option>
                    </select>
                    <div className='view'>
                        <img src={list_icon} alt="List"/>
                        <img src={menu_items_icon} alt="Menu Items"/>
                    </div>
                </div>
            </section>

            <section className='listing-results'>
                  <div className="listing">
                      
                  </div>
            </section>

            <section className='pagination'>

            </section>

        </section>
        )
    }
}
