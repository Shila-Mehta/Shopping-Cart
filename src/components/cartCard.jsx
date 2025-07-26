

export  function cartCard({item}){
    
    return (
        <div className="border-2  border-b-amber-950">

         <div><img  src={item.image}/> img</div>
         <p>{item.title}</p>
         <button>remove</button>

        </div>
    )
   
}