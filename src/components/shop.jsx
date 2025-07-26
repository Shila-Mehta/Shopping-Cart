import Card from "./card";
import NavBar from "./navBar";
import Categories from "./categories";
import useCategory from "../useCategory";
import { useData } from "../useData";
import useFilteredData from "../useFilteredData";
import { useNavigate } from "react-router";



function Shop(){
  const [data,setData]= useData()
  const [filteredData,setfilteredData]=useFilteredData(data)
  const [category,setCategory]= useCategory();
  let navigate=useNavigate();

   
   
    return(
        <div>
            <NavBar/>
           {/* <p> Hello  from shop page</p> */}

           <Categories  item={data} setfilteredData={setfilteredData}  setCategory={setCategory}   />

           <div className=" mt-4 grid grid-cols-4 gap-5 ">

             {filteredData.map((item)=>
              <Card 
               key={item.id} 
               item={item}
               handleNavigation={()=> navigate('/product',{state:{item}}) } 
               />  )
            
               }

           </div>
          
        </div>
    )
}

export default  Shop;