import { useState } from "react";
import { imageUrls } from "../data/images";
import { useNavigate } from "react-router";



export default function Hero2 (){
let navigate=useNavigate();

 const [currIndex,setCurrIndex]=useState(0);

 setTimeout(()=>{
   onNext();
 },5000)

 const onNext=()=>{
    setCurrIndex((currIndex+1)%4);
 }

 const onPrev=()=>{
    setCurrIndex((currIndex-1+4)%4);
 }

return (
    <section>
        <div className="w-full  h-150 ">
            <img  src={imageUrls[currIndex]}  className=" h-full  w-full  object-cover  object-center"/>
        </div>  
       
           <div className="absolute top-1/2  left-1/3  flex flex-col items-center gap-3  ">
            <h1 className="text-white   font-bold  text-4xl">Your Wardrobe Refresh Starts Here</h1>
            <h3 className="text-pink-600   font-semibold text-2xl ">Timeless essentials and standout pieces.</h3>
            <button onClick={()=>navigate("/shop")} className="bg-purple-700  px-10  py-3 text-white text-3xl rounded-lg  hover:bg-purple-900  cursor-pointer font-semibold">Shop</button>
           </div>
        <img onClick={onPrev} src="Backward.png"  className=" absolute size-5  left-5  top-1/2  cursor-pointer"/>
        <img onClick={onNext} src="Forward.png" className=" absolute size-5  right-5   top-1/2  cursor-pointer "/>
    </section>
)
}