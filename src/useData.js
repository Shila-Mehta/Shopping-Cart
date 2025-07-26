import { useEffect, useState } from "react";

export function useData (){
const [data,setData]=useState([]);

  useEffect(()=>{

    fetch('https://fakestoreapi.com/products')
    .then((res)=> res.json())
    .then((Data)=> setData(Data))
    .catch(err=> console.log(err))
  

  },[])
  
  console.log(data);
  return [data,setData];
}





