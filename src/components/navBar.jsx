import { Link } from "react-router";
function NavBar(){
  return (
    <nav className=" py-5  flex justify-between items-center shadow-sm fixed top-3   w-full bg-white">
    <h2 className="ml-20 text-2xl font-bold text-red-500">N.Shop</h2>
    <div className=" mr-10 flex  gap-20">
    <Link  to="/"   > Home </Link>
    <Link  to="/shop"> Shop </Link>
    <Link  to="/cart"> Cart </Link>
    </div>
  
    </nav>
   
  )
}

export default NavBar;