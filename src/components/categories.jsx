
import { filteredData } from "../utils/filteredData";

export  default  function Categories({item,setfilteredData,setCategory}){
    if(!item) return; 
    
    return (
        <>
            <h2 className='mb-5 mt-25 text-center text-3xl font-bold  text-fuchsia-700'>Search By  Category</h2>
            
            <div className="flex justify-around   ">

                 <p   onClick={()=>{
                    setfilteredData(filteredData("men's clothing",item))
                    setCategory("men's clothing");
                    }}    className="flex justify-center items-center size-23   font-semibold shadow-sm  bg-gray-100   rounded-full     hover:bg-black  hover:text-cyan-50  cursor-pointer" >Mens</p>

                 <p   onClick={()=>{
                    setfilteredData(filteredData('jewelery',item))
                     setCategory("jewelery");
                    }}          className="flex justify-center items-center size-23   font-semibold shadow-sm  bg-gray-100 rounded-full   hover:bg-black  hover:text-cyan-50    cursor-pointer">Jewelery</p>

                 <p   onClick={()=>{
                    setfilteredData(filteredData('electronics',item))
                    setCategory('electronics')
                    }}       className="flex justify-center items-center size-23   font-semibold shadow-sm  bg-gray-100 rounded-full  border-amber-950  hover:bg-black  hover:text-cyan-50    cursor-pointer">Electronics</p>

                 <p   onClick={()=>{
                    setfilteredData(filteredData("women's clothing",item))
                    setCategory("women's clothing")
                    }}  className="flex justify-center items-center size-23   font-semibold shadow-sm  bg-gray-100 rounded-full  border-amber-950  hover:bg-black  hover:text-cyan-50    cursor-pointer">womens</p>

            </div>
        </>
    )

   
}