import { useContext } from "react";
import NavBar from "./navBar";
import { CartContext } from "../cartContext";
import { CartCard } from "./cartCard";
import OrderCard from "./orderCard";


function Cart(){

  const {cartData,setCartData}=useContext(CartContext);

  console.log(cartData)
  

  function handleDelete(itemId){
    setCartData((prev)=> prev.filter((item)=>item.id!==itemId));
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
        <h1 className="text-center">Your Shopping Cart</h1>
        <div  className="flex justify-around  items-center border-2 border-amber-300 h-screen ">

          <div className=" border-2 border-amber-300 flex flex-col gap-3 h-full min-w-1/2 overflow-y-scroll">
          {
            cartData.map((item)=>
            <CartCard  key={item.id} item={item} onDelete={handleDelete}  onIncrement={handleIncrement} onDecrement={handleDecrement} />
            )
          }
        </div>

         <OrderCard cartData={cartData}/>

        </div>
        

       
      

    </div>
  )
}


export default  Cart;