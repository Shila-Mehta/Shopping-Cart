import { useState } from "react";
import { imageUrls } from "../data/images";
import { useNavigate } from "react-router";
import { Icons } from "../data/icons";



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
        <div className="w-full  h-80   md:h-100 lg:h-150 ">
            <img  src={imageUrls[currIndex]}  className=" h-full  w-full  object-cover  object-center"/>
        </div>  
       
           <div className="absolute w-full top-1/4 md:top-1/3 lg:top-1/2 px-4 flex flex-col items-center gap-3 text-center transform -translate-y-1/2  ">
            <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">Your Wardrobe Refresh Starts Here</h1>
            <h3 className="text-pink-500 font-bold text-lg md:text-2xl ">Timeless essentials and standout pieces.</h3>
            <button onClick={()=>navigate("/shop")} className="bg-purple-700 px-6 py-2 md:px-10 md:py-3 text-white text-lg md:text-2xl rounded-lg hover:bg-purple-900 font-semibold cursor-pointer">Shop</button>
           </div> 

           <Icons.Backward onClick={onPrev}  className=" absolute left-4 top-45 lg:top-1/2 transform -translate-y-1/2 text-4xl text-pink-400 hover:text-pink-600 cursor-pointer"/>
           <Icons.Forward  onClick={onNext}  className="absolute right-4  top-45 lg:top-1/2 transform -translate-y-1/2 text-4xl text-pink-400 hover:text-pink-600 cursor-pointer "/>


           
    </section>
)
}