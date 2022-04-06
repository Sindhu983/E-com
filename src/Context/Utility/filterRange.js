const filterPrice = (data, {filterByPrice})=>{
        return data.filter((item)=>Number(item.price)<=Number(filterByPrice))
}
export {filterPrice}
