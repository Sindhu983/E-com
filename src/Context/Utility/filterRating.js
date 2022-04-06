const filterRating =({product,filterState})=>{
    console.log(product.filter((item)=>item.rating>=4),"from rating")
    if (filterState === "GREATER_THAN_FOUR"){
        return product.filter((item)=>item.rating>=4)
    }else if (filterState === "GREATER_THAN_THREE"){
        return product.filter((item)=>item.rating>=3)
        
    }else if(filterState === "GREATER_THAN_TWO"){
        return product.filter((item)=>item.rating>=2)

    }else if (filterState === "GREATER_THAN_ONE"){
        return product.filter((item)=>item.rating>=2)

    }else{
        return product
    }

}
export {filterRating}