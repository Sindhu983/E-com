function sorted(data, {sortByPrice}){
    if (sortByPrice==="HIGH_TO_LOW"){
      return [...data.sort((a,b)=>Number(b.price)-Number(a.price))]
      
    }else if(sortByPrice==="LOW_TO_HIGH"){
      return [...data.sort((a,b)=>Number(a.price)-Number(b.price))]
      
    }else{
      return data
    }
    
  }
export {sorted}  