import { useContext } from "react";
import { useLocation } from "react-router"
import { CartContext } from "../cartContext";


export default  function Product(){

const {cartData,setCartData} = useContext(CartContext);

// console.log("cartData type:",Array.isArray(cartData)); // should be 'object'

let location=useLocation();


function handleCartUpdate(){
    const item=location.state.item;

    const exits=cartData.some( obj => obj.id ===item.id);

    if(!exits)  setCartData((prev)=>[...prev,item]);
  
}


    return (
        <div className=" w-screen  h-screen flex  items-center  justify-center  gap-6">

         <div  className='w-100  h-100  border-2 border-b-black '><img  className='w-full  h-full object-contain' src={location.state.item.image}/></div>

        <div className='p-5 flex  flex-col  justify-evenly items-center w-100  h-100  border-2 border-b-black  text-center '> 

        <h1  className="text-red-400">{location.state.item.title}</h1>
        <p className="text-gray-600">{location.state.item.description}</p>
        <p className="text-red-700">{location.state.item.price + ' $'}</p>
        <button onClick={handleCartUpdate} className="p-3  bg-gray-500">Add to Cart</button>
        </div>
       

        </div>
        
    )
}