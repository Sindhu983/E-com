import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../Reducer/filter-reducer"; 

const FilterContext = createContext()

const initialState={
    sortByPrice:"",
    filterByPrice:"",
    filterByCategories:[],
}
    
const FilterProvider=({children})=>{

    const [state, dispatch] = useReducer(filterReducer, initialState)


    return <FilterContext.Provider value={{state, dispatch}}>
        {children}
    </FilterContext.Provider>   
}
const useFilter = ()=>useContext(FilterContext)
export { FilterProvider, useFilter }