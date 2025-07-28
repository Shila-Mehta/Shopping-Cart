export default function OrderCard({cartData}){
    return(
        <div  className=" flex  flex-col justify-between border-1 border-b-black p-5  min-w-80 min-h-70">

            <h1 className="text-center text-red-500  text-2xl font-bold ">Order Summary</h1>

            <div className="flex justify-between">
            <p className="text-xl">Shipping:</p>
            <p className="text-xl text-gray-500">Free</p>
            </div>

            <div className="flex justify-between">
            <p className="text-xl">Total:</p>
            <p className="text-red-600 text-xl">{cartData.reduce((prev,curr)=> prev + curr.price * curr.quantity,0)+" $"}</p>
            </div>
    

            <button className="p-3  bg-purple-500  rounded hover:bg-purple-400 cursor-pointer  text-xl text-white font-semibold">Proceed  to checkout</button>
        </div>
    )
}




