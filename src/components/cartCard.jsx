

export  function CartCard({item,onDelete,onIncrement,onDecrement}){
    return (
        <div className=" p-5  flex  justify-around  items-center border-1  border-b-amber-950 h-30  max-w-500  hover:scale-103">

         <div className="max-w-20 h-20"><img  className="w-full  h-full object-contain" src={item.image}/> </div>
         <p className=" max-w-60 ">{item.title}</p>
         <p className="text-red-600">{item.price + '$'}</p>
         <div className=" px-3 py-2 border-1 border-amber-950  rounded">
            <button onClick={()=>onIncrement(item.id)}   className="px-2  border-1 border-gray-500 cursor-pointer">+</button>
            <span className="px-2">{item.quantity}</span>
             <button  onClick={()=>onDecrement(item.id)} className="px-2 border-1 border-gray-500  cursor-pointer">-</button>
         </div>
         <button onClick={()=>onDelete(item.id)} className="p-3 cursor-pointer bg-emerald-500  hover:bg-emerald-600 rounded  text-white text-xl font-semibold">remove</button>

        </div>
    )
   
}