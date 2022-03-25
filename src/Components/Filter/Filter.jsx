import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar } from '../index';
import './Filter.css'

function Filter() {
    return (
        <>
        <Navbar/>

        <div className="filter-main-container">
            <div className="sidebar">
                <div className="filter-clear">
                    <h3 className="filter-text">Filter</h3>
                    <button className="clear_btn">Clear</button>
                </div>
                <div className="price-filter">
                    <h2 className="price">Price</h2>
                    <div className='rate'>
                    <h3>5k</h3>
                    <h3>10k</h3>
                    <h3>20k</h3>
                    </div>
                    <input type="range" min="1" max="100" className="slider" />
                </div>
                <h3 className="categories">Category</h3>
                <div className="category-choice">
                    <input type="checkbox" className="category-checkbox" value="Jeans" />
                    <label className="category-label">  Jeans</label>
                    <br />
                    <input type="checkbox" className="category-checkbox" value="Flock" />
                    <label className="category-label">  Frocks</label>
                    <br/>
                    <input type="checkbox" className="category-checkbox" value="Jacket" />
                    <label className="category-label">  Jackets</label>
               </div>
                <h3 className="rating">Rating</h3>
                <div className="rating-choice">
                    <input type="radio" className="category-choice" name="star-rating" value="rating" />
                    <label htmlFor="text">  4 Stars & Above</label>
                    <br />
                    <input type="radio" className="category-choice" name="star-rating" value="rating" />
                    <label htmlFor="text">  3 Stars & Above</label>
                    <br />
                    <input type="radio" className="category-choice" name="star-rating" value="rating" />
                    <label htmlFor="text">  2 Stars & Above</label>
                    <br />
                    <input type="radio" className="category-choice" name="star-rating" value="rating" />
                    <label htmlFor="text">  1 Star & Above</label>
                    <br />
                </div>
                <h3 className="sort">Sort By</h3>
                <div className="sort-choice">
                    <input type="radio" className="category-checkbox" name="price-sort" value="sort" />
                    <label htmlFor="text">  Price-Low to High</label>
                    <br />
                    <input type="radio" className="category-checkbox" name="price-sort" value="sort" />
                    <label htmlFor="text">  Price-High to Low</label>
                    <br />
                </div>
            </div>
        </div>
        </>
    )
}
export {Filter};