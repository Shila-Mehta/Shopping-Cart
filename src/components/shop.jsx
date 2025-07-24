import Card from "./card";
import NavBar from "./navBar";

function Shop(){
    return(
        <div>
            <NavBar/>
           <p> Hello  from shop page</p>

           <div className="flex gap-3 ">

           <Card/>
           <Card/>
           <Card/>
           <Card/>
           <Card/>

           </div>
          
        </div>
    )
}

export default  Shop;