import React from 'react'
// import { Link } from 'react-router-dom';
import { useFilter } from '../../Context/FilterContext/Filter-Context';
import { filterRating } from '../../Context/Utility/filterRating';
import { Navbar } from '../index';
import './Filter.css'

function Filter() {
    const {filterState, filterDispatch} = useFilter()
    const {sortByPrice,filterByPrice,filterByCategories,filterByRating} = filterState
    console.log(filterByRating,"filterdsyate");

    return (
        <>
        <Navbar/>

        <div className="filter-main-container">
            <div className="sidebar">
                <div className="filter-clear">
                    <h3 className="filter-text">Filter</h3>
                    <button onClick={()=>filterDispatch({type:"CLEAR"})}className="clear_btn">Clear</button>
                </div>
                <h3 className="sort">Sort By</h3>
                <div className="sort-choice">
                    <input type="radio"
                    className="category-checkbox"
                    name="price-sort"
                    id="sort1"
                    checked={sortByPrice==="HIGH_TO_LOW"}
                    onChange={()=>filterDispatch({type:"HIGH_TO_LOW"})}/>
                    <label htmlFor="sort1">  Price-High to low</label>
                    <br />
                    <input type="radio"
                    className="category-checkbox"
                    name="price-sort"
                    id="sort2"
                    checked={sortByPrice==="LOW_TO_HIGH"}
                    onChange={()=>filterDispatch({type:"LOW_TO_HIGH"})}/>
                    <label htmlFor="sort2">  Price-Low to High</label>
                    <br />
                </div>
                <div className="price-filter">
                    <h2 className="price">Price</h2>
                    <div className='rate'>
                    <h3>5k</h3>
                    <h3>10k</h3>
                    <h3>20k</h3>
                    </div>
                    <input onChange={(e)=>filterDispatch({type:"PRICE_FILTER",payload:e.target.value})} type="range" value={filterByPrice} min="100" max="10000" className="slider" />
                </div>
                <h3 className="categories">Category</h3>
                <div className="category-choice">
                    <input type="checkbox"
                    className="category-checkbox"
                    value="Jeans"
                    id ="category_m" checked={filterByCategories.includes("jeans")}
                    onChange={()=>filterDispatch({type:"FILTER_CATEGORY", payload:"jeans"})}/>
                    <label className="category-label">  Jeans</label>
                    <br />
                    <input type="checkbox"
                    className="category-checkbox"
                    value="Frocks"
                    id ="category_f" checked={filterByCategories.includes("frocks")}
                    onChange={()=>filterDispatch({type:"FILTER_CATEGORY", payload:"frocks"})}/>
                    <label className="category-label">  Frocks</label>
                    <br/>
                    <input type="checkbox"
                    className="category-checkbox"
                    value="Jacket"
                    id ="category_j" checked={filterByCategories.includes("jackets")}
                    onChange={()=>filterDispatch({type:"FILTER_CATEGORY", payload:"jackets"})}/>
                    <label className="category-label">  Jackets</label>
               </div>
                <h3 className="rating">Rating</h3>
                <div className="rating-choice">
                    <input type="radio" 
                    className="category-choice" 
                    name="star-rating"
                    value="4"
                     checked={filterByRating===4}
                     onChange={(e)=>filterDispatch({type:"FILTER_RATING",value:e.target.value})}/>
                    <label htmlFor="text">  4 Stars & Above</label>
                    <br />
                    <input checked={filterByRating===3} onChange={()=>filterDispatch({type:"FILTER_RATING", payload:"GREATER_THAN_THREE"})} type="radio" className="category-choice" name="star-rating" value="rating" />
                    <label htmlFor="text">  3 Stars & Above</label>
                    <br />
                    <input checked={filterByRating===2} onChange={()=>filterDispatch({type:"FILTER_RATING", payload:"GREATER_THAN_TWO"})} type="radio" className="category-choice" name="star-rating" value="rating" />
                    <label htmlFor="text">  2 Stars & Above</label>
                    <br />
                    <input checked={filterRating===1} onChange={()=>filterDispatch({type:"FILTER_RATING", payload:"GREATER_THAN_ONE"})} type="radio" className="category-choice" name="star-rating" value="rating" />
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