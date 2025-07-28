import Card from "./card";
import NavBar from "./navBar";
import Categories from "./categories";
import useCategory from "../hooks/useCategory";
import { useData } from "../hooks/useData";
import useFilteredData from "../hooks/useFilteredData";
import { useNavigate } from "react-router";



function Shop(){
  const {data}= useData()
  const [filteredData,setfilteredData]=useFilteredData(data)
  const [category,setCategory]= useCategory();
  let navigate=useNavigate();

   
   
    return(
        <div>
            <NavBar/>
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