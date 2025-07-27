export default function OrderCard({cartData}){
    return(
        <div  className=" flex  flex-col justify-between border-2 border-b-black p-5  min-w-80 min-h-70">

            <h1 className="text-center">Order Summary</h1>

            <div className="flex justify-between">
            <p>Shipping:</p>
            <p>Free</p>
            </div>

            <div className="flex justify-between">
            <p>Total:</p>
            <p>{cartData.reduce((prev,curr)=> prev + curr.price * curr.quantity,0)}</p>
            </div>
    

            <button className="p-3  bg-purple-500  rounded">Proceed  to checkout</button>
        </div>
    )
}




