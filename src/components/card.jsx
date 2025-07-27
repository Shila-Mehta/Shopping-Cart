import { useContext } from "react";
import { CartContext } from "../cartContext";


function Card({item, handleNavigation}){

    const {cartData,setCartData}=useContext(CartContext);

    function handleCartUpdate(){
      setCartData(prev => {
      const exists = prev.find(obj => obj.id === item.id);
       if (exists) {
      return prev.map(obj =>

        obj.id === item.id ? { ...obj, quantity: obj.quantity + 1 } : obj
      );
    } else {
      return [...prev, { ...item, quantity: 1 }];
    }
  });
  
}

 return (
    <div className=" flex  flex-col  gap-3 shadow-lg   max-w-80 px-2 py-2  transition duration-300 ease-in-out hover:translate-y-2">
        <div onClick={handleNavigation} className="w-full  max-h-50   border-b-blue-400" ><img  className="w-full  h-full  object-contain" src={item.image} alt="card"/></div>
        <p className="text-center  text-xl text-red-500">{item.price + '$'}</p>
        <button  onClick={handleCartUpdate}  className="px-2 py-3 w-full rounded-sm  bg-fuchsia-500  cursor-pointer  hover:bg-fuchsia-600 text-xl  text-white  font-semibold">Add to cart</button>

    </div>
 )
}


export default Card;