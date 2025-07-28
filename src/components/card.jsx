import { useContext } from "react";
import { CartContext } from "../hooks/cartContext";
import { Icons } from "../data/icons";
import { CartEvents } from "../handlers/carthandler";


function Card({item, handleNavigation}){

  const {setCartData}=useContext(CartContext);
   const {Update}=CartEvents(setCartData);

   

 return (
    <div className=" flex  flex-col  gap-3 shadow-lg   max-w-80 px-2 py-2  transition duration-300 ease-in-out hover:translate-y-2">
        <div onClick={handleNavigation} className="w-full h-50  cursor-pointer   border-b-blue-400" ><img  className="w-full  h-full  object-contain" src={item.image} alt="card"/></div>
        <p className="text-center  text-xl text-red-500">{item.price + '$'}</p>
        <div className="flex justify-center">
        <Icons.Star  className="text-yellow-400 text-xl"/>
        <Icons.Star  className="text-yellow-400 text-xl"/>
        <Icons.Star  className="text-yellow-400 text-xl"/>
        <Icons.StarEmpty  className="text-yellow-400 text-xl"/>
        <Icons.StarEmpty  className="text-yellow-400 text-xl"/>
        </div>
        <div className="flex justify-center items-center "> <button  onClick={()=>Update(item)}  className="px-6 py-3  max-w-50 rounded-sm  bg-fuchsia-500  cursor-pointer  hover:bg-fuchsia-600 text-xl  text-white  font-semibold">Add to cart</button></div>
    </div>
 )
}


export default Card;