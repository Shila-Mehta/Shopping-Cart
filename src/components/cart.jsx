import { useContext } from "react";
import NavBar from "./navBar";
import { CartContext } from "../cartContext";
import { CartCard } from "./cartCard";
import OrderCard from "./orderCard";
import { useNavigate } from "react-router";


function Cart(){
  let navigate=useNavigate();
  const {cartData,setCartData}=useContext(CartContext);

  

  function handleDelete(itemId){
    setCartData((prev)=> prev.filter((item)=>item.id!==itemId));
  }

  function handleDeleteAll(){
    setCartData( []);
  }


  function handleIncrement(itemId){
   setCartData((prevCart)=>
     prevCart.map((item)=>
       item.id===itemId ?
       {...item,quantity:item.quantity+1}:item
     ))
  }

  function handleDecrement(itemId){
   setCartData((prevCart)=>
     prevCart.map((item)=>
       item.id===itemId ?
       {...item,quantity:Math.max(item.quantity-1,1)}:item
     ))
  }


  

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
          <div  className="flex justify-around  items-center  h-screen ">

          <button onClick={handleDeleteAll} className="absolute left-30 top-40 bg-orange-400  hover:bg-amber-500 px-4 py-3 text-white text-xl cursor-pointer  rounded  font-semibold">remove all</button>

          <div className=" flex flex-col gap-3 h-full min-w-1/2 overflow-y-scroll">
          {
            cartData.map((item)=>
            <CartCard  key={item.id} item={item} onDelete={handleDelete}  onIncrement={handleIncrement} onDecrement={handleDecrement} />
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


