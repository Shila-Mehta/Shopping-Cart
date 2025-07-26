import { createContext,useState } from "react";

export const CartContext=createContext([])

export default function CartProvider({children}){

    const [cartData,setCartData]=useState([]);

     return (
     <CartContext.Provider  value={{cartData,setCartData}}>
        {children}
     </CartContext.Provider>

     )
}