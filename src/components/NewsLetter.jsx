export default function NewsLetter(){
    return (
        <div className="flex  flex-col  items-center justify-evenly  shadow-sm  w-130  min-h-50    ">
            <h1 className="text-2xl font-bold">Join our newsletter & get 20% off</h1>
            <p className="text-sm font-semibold text-gray-800 ">Be the first to know about our new arrivals,sales and exclusive offers</p>
            <div  className="flex  gap-4">
                <input  className="bg-gray-300 p-2 " placeholder="Enter your email"/>
                <button className="bg-gray-900  hover:bg-gray-700   text-white px-4 py-3 font-bold cursor-pointer">Subscribe</button>
            </div>
        </div>
    )
}