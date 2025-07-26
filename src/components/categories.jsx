
import { filteredData } from "../utils/filteredData";

export  default  function Categories({item,setfilteredData,setCategory}){
    if(!item) return; 
    
    return (
        <>
            <h2 className='mb-5 mt-5 text-center'>Categories Section:</h2>
            <div className="flex justify-around  border-2  border-amber-300">
                 <p   onClick={()=>{
                    setfilteredData(filteredData("men's clothing",item))
                    setCategory("men's clothing");
                    }}    className="flex justify-center items-center size-22 border-2 rounded-full   border-amber-950   hover:bg-black  hover:text-cyan-50  cursor-pointer" >Mens</p>
                 <p   onClick={()=>{
                    setfilteredData(filteredData('jewelery',item))
                     setCategory("jewelery");
                    }}          className="flex justify-center items-center size-22 border-2 rounded-full  border-amber-950  hover:bg-black  hover:text-cyan-50    cursor-pointer">Jewelery</p>
                 <p   onClick={()=>{
                    setfilteredData(filteredData('electronics',item))
                    setCategory('electronics')
                    }}       className="flex justify-center items-center size-22 border-2 rounded-full  border-amber-950  hover:bg-black  hover:text-cyan-50    cursor-pointer">Electronics</p>
                 <p   onClick={()=>{
                    setfilteredData(filteredData("women's clothing",item))
                    setCategory("women's clothing")
                    }}  className="flex justify-center items-center size-22 border-2 rounded-full  border-amber-950  hover:bg-black  hover:text-cyan-50    cursor-pointer">womens</p>
            </div>
        </>
    )

   
}