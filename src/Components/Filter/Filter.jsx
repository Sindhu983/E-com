import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import { useFilter } from '../../Context/FilterContext/Filter-Context';
import { Navbar } from '../index';
import './Filter.css'

function Filter() {
    const {state, dispatch} = useFilter()
    const {sortByPrice,filterByPrice,filterByCategories} = state

    return (
        <>
        <Navbar/>

        <div className="filter-main-container">
            <div className="sidebar">
                <div className="filter-clear">
                    <h3 className="filter-text">Filter</h3>
                    <button className="clear_btn">Clear</button>
                </div>
                <h3 className="sort">Sort By</h3>
                <div className="sort-choice">
                    <input type="radio"
                    className="category-checkbox"
                    name="price-sort" value="sort"
                    id="sort1"
                    checked={sortByPrice==="HIGH_TO_LOW"}
                    onChange={()=>dispatch({type:"SORT_BY", payload:"HIGH_TO_LOW"})}/>
                    <label htmlFor="sort1">  Price-High to low</label>
                    <br />
                    <input type="radio"
                    className="category-checkbox"
                    name="price-sort"
                    value="sort"
                    id="sort2"
                    checked={sortByPrice==="LOW_TO_HIGH"}
                    onChange={()=>dispatch({type:"SORT_BY", payload:"LOW_TO_HIGH"})}/>
                    <label htmlFor="sort2">  Price-Low to High</label>
                    <br />
                </div>
                <div className="price-filter">
                    <h2 className="price">Price</h2>
                    <div className='rate'>
                    <h3>1k</h3>
                    <h3>3k</h3>
                    <h3>5k</h3>
                    </div>
                    <input onClick={()=>dispatch({type:"range"})} type="range" min="1" max="100" className="slider" />
                </div>
                <h3 className="categories">Category</h3>
                <div className="category-choice">
                    <input type="checkbox"
                    className="category-checkbox"
                    value="Jeans"
                    id ="category_m" checked={filterByCategories.includes("Jeans")}
                    onChange={()=>console.log("hello")}/>
                    <label className="category-label">  Jeans</label>
                    <br />
                    <input type="checkbox"
                    className="category-checkbox"
                    value="Frocks"
                    id ="category_f" checked={filterByCategories.includes("Frocks")}
                    onChange={()=>dispatch({type:"FILTER_CATEGORY", payload:"Frocks"})}/>
                    <label className="category-label">  Frocks</label>
                    <br/>
                    <input type="checkbox"
                    className="category-checkbox"
                    value="Jacket"
                    id ="category_j" checked={filterByCategories.includes("Jackets")}
                    onChange={()=>dispatch({type:"FILTER_CATEGORY", payload:"Jackets"})}/>
                    <label className="category-label">  Jackets</label>
               </div>
                <h3 className="rating">Rating</h3>
                <div className="rating-choice">
                    <input type="radio" 
                    className="category-choice" 
                    name="star-rating"
                    value="rating" />
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
                
            </div>
        </div>
        </>
    )
}
export {Filter};