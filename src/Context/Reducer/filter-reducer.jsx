
function filterReducer(state, action) {
    switch (action.type) {
        case "HIGH_TO_LOW":
            return { ...state, sortByPrice: "HIGH_TO_LOW" };
        case "LOW_TO_HIGH":
                return { ...state, sortByPrice:"LOW_TO_HIGH" };
        case 'PRICE_FILTER':
            return { ...state, filterByPrice: action.payload };
        case 'FILTER_CATEGORY':
            return {...state, filterByCategories:action.payload}
            // return {...state, filterByCategories:[...state.filterByCategories, action.payload]}
    
        case 'FILTER_RATING':{
            return {...state,filterByRating:action.payload}
        }
        case 'CLEAR':
            return {
                sortByPrice:"",
                filterByPrice:10000,
                filterByRating:"",
                filterByCategories:[],
            };
        default:
            return { ...state };
    }
}
export { filterReducer }
