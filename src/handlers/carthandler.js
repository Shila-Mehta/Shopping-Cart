import { useCallback } from "react"


export const  CartEvents=(setCartData)=>{
  
     const Delete= useCallback((itemId)=> {
      setCartData((prev)=> prev.filter((item)=>item.id!==itemId))
    },[setCartData])

     const DeleteAll= useCallback(()=>{
      setCartData( []) 
    },[setCartData])

     const  Increment=useCallback(itemId=>{
     setCartData((prevCart)=>
     prevCart.map((item)=>
       item.id===itemId ?
       {...item,quantity:item.quantity+1}:item
     ))
    },[setCartData])

    const Decrement=useCallback(itemId=>{
    setCartData((prevCart)=>
     prevCart.map((item)=>
       item.id===itemId ?
       {...item,quantity:Math.max(item.quantity-1,1)}:item
     ))
    },[setCartData])


     const Update= useCallback(item=>{
       setCartData(prev => {
       const exists = prev.find(obj => obj.id === item.id);
        if (exists) {
       return prev.map(obj =>
 
         obj.id === item.id ? { ...obj, quantity: obj.quantity + 1} : obj
       );
     } else {
       return [...prev, { ...item, quantity: 1 }];
     }
      });

     },[setCartData])

    return {Delete,DeleteAll,Increment,Decrement,Update}
 }
 

  