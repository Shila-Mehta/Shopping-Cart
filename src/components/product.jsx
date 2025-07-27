import { useContext } from "react";
import { useLocation, useNavigate } from "react-router"
import { CartContext } from "../cartContext";
import NavBar from "./navBar";
import Footer from "./footer";


export default  function Product(){
let navigate=useNavigate();
const {cartData,setCartData} = useContext(CartContext);


let location=useLocation();


function handleCartUpdate(){
    const item=location.state.item;

     setCartData(prev => {

      const exists = prev.find(obj => obj.id === item.id);

    if (exists) {
      return prev.map(obj =>
        
        obj.id === item.id ? { ...obj, quantity: obj.quantity + 1 } : obj
      );
    } else 
    {
      return [...prev, { ...item, quantity: 1 }];
    }
  });
  
}

    return (
      <div>
      <NavBar/>
       <div className=" w-screen  h-screen flex  items-center  justify-center  gap-6">

         <div  className='w-100  h-100  border-1 border-b-black '><img  className='w-full  h-full object-contain' src={location.state.item.image}/></div>

        <div className='p-5 flex  flex-col  justify-evenly items-center w-100  h-100  border-1 border-b-black  text-center overflow-y-scroll '> 

        <h1  className="text-red-400 text-3xl font-semibold">{location.state.item.title}</h1>
        <p className="text-gray-600  text-md">{location.state.item.description}</p>
        <p className="text-red-600 text-2xl font-semibold">{location.state.item.price + ' $'}</p>
        <div className="flex gap-7">
        <button onClick={handleCartUpdate} className="p-3  bg-gray-600 text-white text-xl font-semibold rounded  hover:bg-gray-700 cursor-pointer">Add to Cart</button>
        <button  onClick={()=>navigate('/shop')} className="bg-purple-600 p-3  text-white text-xl rounded hover:bg-purple-700 cursor-pointer">Back to Shop</button>

        </div>
        </div>
       

        </div>

        <Footer/>
      </div>
        
        
    )
}