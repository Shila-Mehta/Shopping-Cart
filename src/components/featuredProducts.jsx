import { useEffect, useState } from "react";
import { useData } from "../hooks/useData";
import { filteredData } from "../utils/filteredData";

export default function FeaturedProducts(){
  const {data,loading,error}=useData();
  const [currIndex,setCurrIndex]=useState(0);

    useEffect(()=>{
    let isMounted=true;
     const interval= setInterval(()=>{
        if (isMounted){
        setCurrIndex((prev)=>(prev+1)%4)
        }
    },600)
     
    return ()=>{
        isMounted=false;
        clearInterval(interval);
    }
 },[])

 if(loading) return <p className="text-center">Loading Products...</p>
 if(error) return <p className="text-center text-red-500">{error}</p>
 if(!data || data.length===0) return <p> No data Found.</p>
  
 const men=filteredData("men's clothing",data);
 const women=filteredData("women's clothing",data);
 const jewelery=filteredData('jewelery',data);
 const electronics=filteredData('electronics',data);

    return(
        <div className="mb-3 shadow-sm py-5">
            <h1 className="text-center  shadow-sm   text-purple-700 text-2xl font-bold mb-3">Featured Products</h1>
            <div className="flex justify-around">
                <div className=" shadow-lg size-50 p-2">
                <img src={men[currIndex].image} className="w-full h-full object-contain"/>
                </div>

                <div className="shadow-lg  size-50 p-2 ">
                 <img src={women[currIndex].image} className="w-full h-full object-contain"/>
                </div>

                <div className="shadow-lg size-50 p-2">
                <img src={jewelery[currIndex].image} className="w-full h-full object-contain"/>
                </div>
                
                <div className="shadow-lg  size-50 p-2" >
                 <img src={electronics[currIndex].image} className="w-full h-full object-contain"/>
                </div>
            </div>
        </div>
    )
}