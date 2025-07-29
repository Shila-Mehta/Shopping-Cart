import { createContext,useEffect,useState } from "react";

export const CartContext=createContext([])

export default function CartProvider({children}){

    const [cartData,setCartData]=useState(()=>{
      // load cart data  from local storage on first render
      const storedCart=localStorage.getItem('cartData');
      return storedCart ?JSON.parse(storedCart):[]
    });

    //save  cart data to local storage whenever it changes

    useEffect(()=>{
      localStorage.setItem('cartData',JSON.stringify(cartData));
    },[cartData])

     return (
     <CartContext.Provider  value={{cartData,setCartData}}>
        {children}
     </CartContext.Provider>

     )
}