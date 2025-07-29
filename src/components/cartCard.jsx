import { Icons } from "../data/icons";


export  function CartCard({item,onDelete,onIncrement,onDecrement}){
    return (
        <div className=" p-5  flex  justify-around  items-center   shadow-sm  h-30  max-w-700   transition duration-300 ease-in-out hover:translate-y-1">

         <div className="max-w-20 h-20"><img  className="w-full  h-full object-contain" src={item.image}/> </div>
         <p className=" max-w-60 ">{item.title}</p>
         <p className="text-red-600">{item.price + '$'}</p>
         <div className=" px-3 py-2  shadow-sm  rounded">
            <button onClick={()=>onIncrement(item.id)}   className="px-2  bg-yellow-400 text-white font-semibold hover:bg-yellow-500 cursor-pointer">+</button>
            <span className="px-2 text-sm font-semibold">{item.quantity}</span>
             <button  onClick={()=>onDecrement(item.id)} className="px-2  bg-gray-400  text-white font-semibold hover:bg-gray-500 cursor-pointer">-</button>
         </div>
         <button onClick={()=>onDelete(item.id)} className=" cursor-pointer  text-emerald-500 font-semibold hover:text-emerald-700">{<Icons.Trash  className="text-2xl"/>}</button>
        </div>
    )
   
}