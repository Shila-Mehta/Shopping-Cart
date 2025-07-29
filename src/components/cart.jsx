import { useContext } from "react";
import NavBar from "./navBar";
import { CartContext } from "../hooks/cartContext";
import { CartCard } from "./cartCard";
import OrderCard from "./orderCard";
import { useNavigate } from "react-router";
import { Icons } from "../data/icons";
import { CartEvents } from "../handlers/carthandler";

  
 function Cart(){
  let navigate=useNavigate();
  const {cartData,setCartData}=useContext(CartContext);
  const {Delete,DeleteAll,Increment,Decrement}=CartEvents(setCartData);

 

  return(
    <div>
        <NavBar/>
        <h1 className="text-center mt-30 mb-20 text-3xl text-purple-800 font-bold ">Your Shopping Cart</h1>

        {(cartData.length===0)?

        (<div className="flex flex-col items-center  justify-center   ">
        <div className=" flex flex-col justify-center  items-center w-100  p-5 shadow-sm gap-10">
         <p className="text-2xl  text-gray-600"> Your  cart is Empty </p>
        <button  onClick={()=>navigate("/shop")} className="p-3 bg-red-500 rounded hover:bg-red-600 cursor-pointer">Back To Shop</button>
        </div>
     
        </div>
        ):

        (
          <div  className=" flex  lg:flex-row justify-around  items-center  h-screen flex-col  gap-10 px-4">
           
          <button onClick={DeleteAll} className=" flex absolute left-30 top-40 bg-orange-400  hover:bg-amber-500 px-4 py-3 text-white text-sm   cursor-pointer  rounded  font-semibold    gap-4">{<Icons.Trash/>} All</button>

          <div className=" flex flex-col gap-3 h-full min-w-1/2 overflow-y-scroll">
          {
            cartData.map((item)=>
            <CartCard  key={item.id} item={item} onDelete={Delete}  onIncrement={Increment} onDecrement={Decrement}  />
            )
          }
        </div>

         <OrderCard cartData={cartData}/>

        </div>
        )}
        
       
      

    </div>
  )

}
 



export default  Cart;



