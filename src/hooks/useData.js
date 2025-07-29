import { useEffect, useState } from "react";

export function useData (){
const [data,setData]=useState(()=>{
  const stored=localStorage.getItem('productData');
  return stored ? JSON.parse(stored):[]
});
const [loading,setLoading]=useState(true)
const [error,setError]=useState(null);

  useEffect(()=>{

    if(data.length >0) return;

    fetch('https://fakestoreapi.com/products')
    .then((res)=> res.json())
    .then((Data)=> {
      setData(Data)
      localStorage.setItem('productData',JSON.stringify(Data))
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





