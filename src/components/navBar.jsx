import { Link } from "react-router";
import { Icons } from "../data/icons";
import { useContext } from "react";
import { CartContext } from "../hooks/cartContext";


function NavBar(){
  const {cartData}=useContext(CartContext);
  return (
    <nav className=" py-2  flex justify-between items-center shadow-sm fixed top-0   w-full bg-white z-10">
    <h2 className="ml-20 flex  justify-center items-center  font-bold text-white bg-red-500  rounded-full size-12 text-sm  ">Shopi</h2>
    <div className=" mr-10 flex  gap-20">
    <Link  to="/"   className="text-xl font-semibold  text-gray-600" > Home </Link>
    <Link  to="/shop"  className="text-xl font-semibold text-gray-600"> Products </Link>
    <Link  to="/cart"> <Icons.Cart className="text-2xl  text-red-500 hover:text-black"/> <p className="p-3 absolute w-5 h-5  top-2 right-4  flex  justify-center items-center rounded-full bg-amber-400 text-white font-semibold ">{cartData.length}</p></Link>
    </div>
    </nav>
   
  )
}

export default NavBar;