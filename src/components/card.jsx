function Card(){
 return (
    <div className=" border-4  border-amber-200 size-44 px-2 py-2">
        <img  alt="card"/>
        <h3>item name</h3>
        <p>item description</p>
        <button  className="px-2 py-2  rounded-sm  bg-fuchsia-400 ">Add to cart</button>

    </div>
 )
}


export default Card;