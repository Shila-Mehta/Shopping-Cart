import { useContext } from "react";
import { useLocation, useNavigate } from "react-router"
import { CartContext } from "../hooks/cartContext";
import NavBar from "./navBar";
import Footer from "./footer";
import { Icons } from "../data/icons";
import { CartEvents } from "../handlers/carthandler";


export default  function Product(){
let navigate=useNavigate();
let location=useLocation();
const {setCartData}=useContext(CartContext);
 const {Update}=CartEvents(setCartData);


    return (
      <div>
      <NavBar/>
       <div className=" w-screen  h-screen flex flex-col md:flex-row  lg:flex-row items-center  justify-center  gap-6 mt-10">

         <div  className=' size-80  lg:size-110  shadow-xl p-5 '><img  className='w-full  h-full object-contain' src={location.state.item.image}/></div>

        <div className='p-5 flex  flex-col  justify-evenly items-center  size-80  lg:size-110  shadow-xl  text-center overflow-y-scroll '> 

        <h1  className="text-red-500 text-xl  lg:text-3xl  font-semibold">{location.state.item.title}</h1>
        <p className="text-gray-600  text-xs  lg:text-sm">{location.state.item.description}</p>
        <p className="text-red-600 text-sm lg:text-2xl font-semibold">{location.state.item.price + ' $'}</p>

         <div className="flex justify-center">
                <Icons.Star  className="text-yellow-400 text-sm lg:text-xl"/>
                <Icons.Star  className="text-yellow-400 text-sm lg:text-xl"/>
                <Icons.Star  className="text-yellow-400 text-sm lg:text-xl"/>
                <Icons.StarEmpty  className="text-yellow-400 text-sm lg:text-xl"/>
                <Icons.StarEmpty  className="text-yellow-400 text-sm lg:text-xl"/>
        </div>

        <div className="flex gap-7">
        <button onClick={()=>Update(location.state.item)} className="p-2 lg:p-3  bg-gray-600 text-white text-xs lg:text-sm font-semibold rounded  hover:bg-gray-700 cursor-pointer">Add to Cart</button>
        <button  onClick={()=>navigate('/shop')} className="  p-2 lg:p-3  bg-purple-600  text-white  text-xs lg:text-sm rounded font-semibold  hover:bg-purple-700 cursor-pointer">Back to Shop</button>

        </div>
        </div>
       

        </div>

        <Footer/>
      </div>
        
        
    )
}