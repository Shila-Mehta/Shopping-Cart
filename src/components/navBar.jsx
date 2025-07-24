import { Link } from "react-router";

Link

function NavBar(){
  return (
    <nav className=" py-5  flex justify-around items-center bg-blue-500">
    <Link  to="/"   > Home </Link>
    <Link  to="/shop"> Shop </Link>
    <Link  to="/cart"> Cart </Link>
    </nav>
   
  )
}

export default NavBar;