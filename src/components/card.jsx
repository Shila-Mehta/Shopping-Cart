import { useContext } from "react";
import { CartContext } from "../cartContext";


function Card({item, handleNavigation}){

    const {cartData,setCartData}=useContext(CartContext);
    console.log(cartData);


    function handleCartUpdate(){
    const exits=cartData.some( obj =>obj.id===item.id);
    if(!exits)  setCartData((prev)=> [...prev,item]);
  
}

 return (
    <div onClick={handleNavigation}  className=" flex  flex-col  gap-3 border-4  border-amber-200  max-w-80 px-2 py-2  transition duration-300 ease-in-out hover:translate-y-2">
        <div  className="w-full  max-h-50  border-2  border-b-blue-400" ><img  className="w-full  h-full  object-contain" src={item.image} alt="card"/></div>
        <p className="text-center">{item.price + '$'}</p>
        <button  onClick={handleCartUpdate}  className="px-2 py-2 w-full rounded-sm  bg-fuchsia-400 ">Add to cart</button>

    </div>
 )
}


export default Card;