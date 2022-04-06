const categotyFilter = ({filterByCategories}, data)=>{
    return filterByCategories.length>0 ? data.filter((item)=>filterByCategories.includes(item.categoryName.toLowerCase())):data
}
export {categotyFilter}  

