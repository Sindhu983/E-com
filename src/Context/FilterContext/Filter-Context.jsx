import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../Reducer/filter-reducer"; 

const FilterContext = createContext()

const initialState={
    sortByPrice:"",
    filterByPrice:10000,
    filterByRating:"",
    filterByCategories:[],
}
    
const FilterProvider=({children})=>{

    const [filterState, filterDispatch] = useReducer(filterReducer, initialState)


    return <FilterContext.Provider value={{filterState, filterDispatch}}>
        {children}
    </FilterContext.Provider>   
}
const useFilter = ()=>useContext(FilterContext)
export { FilterProvider, useFilter }