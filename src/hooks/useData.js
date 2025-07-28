import { useEffect, useState } from "react";

export function useData (){
const [data,setData]=useState([]);
const [loading,setLoading]=useState(true)
const [error,setError]=useState(null);

  useEffect(()=>{

    fetch('https://fakestoreapi.com/products')
    .then((res)=> res.json())
    .then((Data)=> {
      setData(Data)
      setLoading(false)
    })
    .catch(err=> {
      setError('Failed to load data')
      console.log(err);
      setLoading(false)
    })
  

  },[])
  
  // console.log(data);
  return {
    data,setData,
    loading ,setLoading,
    error ,setError
  }
}





