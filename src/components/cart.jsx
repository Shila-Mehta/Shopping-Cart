import { useContext } from "react";
import NavBar from "./navBar";
import { CartContext } from "../cartContext";
import { cartCard } from "./cartCard";


function Cart(){

  const [cartData,setCartData]=useContext(CartContext);

  return(
    <div>
        <NavBar/>
        <h1>Your Shopping Cart</h1>
        <div>
          {
            cartData.map((item)=>{

              <cartCard  key={item.id}  item={item} />

            })
          }
        </div>

    </div>
  )
}


export default  Cart;