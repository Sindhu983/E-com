
function filterReducer(state, action) {
    switch (action.type) {
        case "SORT_BY":
            return { ...state, sortByPrice: action.payload };
        case 'PRICE_FILTER':
            return { ...state, filterByPrice: action.payload };
        case 'FILTER_CATEGORY':
            

        case 'CLEAR':
            return {
                ...state,
                sortByPrice: "",
                filterByPrice: "",
                filterByCategories: [],
            };
        default:
            return { ...state };
    }
}
export { filterReducer }
