const filterRating =(data,{filterByRating})=>{
    if (filterByRating === "GREATER_THAN_FOUR"){
       return data.filter((item)=>item.rating>=4)
    }else if (filterByRating === "GREATER_THAN_THREE"){
        return data.filter((item)=>item.rating>=3)    
    }else if(filterByRating === "GREATER_THAN_TWO"){
        return data.filter((item)=>item.rating>=2)
    }else if (filterByRating === "GREATER_THAN_ONE"){
        return data.filter((item)=>item.rating>=2)
    }else{
        return data;
    }
}
export {filterRating}