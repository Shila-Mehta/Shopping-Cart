import { useEffect, useState } from "react";


export default  function  useFilteredData(data){   
  
   const [filteredData,setfilteredData]=useState([]);

    useEffect(()=>{
       setfilteredData(data);
    },[data])

    
   return [filteredData,setfilteredData];
}