import NewsLetter from "./NewsLetter"

export default function Footer(){
    return(
    <div className="py-5  shadow-sm" >
          <div className="flex justify-center items-center mb-10">
            <NewsLetter/>
          </div> 

        <div className="grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-4 bg-gray-300 p-5   ">
         
        <div >
        <h1 className="text-2xl font-bold mb-3">Shopi</h1>
        <p className="text-gray-800 text-md  max-w-50">Your style picks are just a click away</p>
        </div>

        <div>
        <h1 className="text-2xl font-bold">Company</h1>
         <p className="text-gray-800 text-md">About</p>
         <p className="text-gray-800 text-md">Career</p>
         <p className="text-gray-800 text-md">Press</p>
        </div>

        <div>
         <h1 className="text-2xl font-bold">Support</h1>
         <p className="text-gray-800 text-md">Contact</p>
         <p className="text-gray-800 text-md">FAQs</p>
         <p className="text-gray-800 text-md">Shipping</p>
        </div>

        <div>
        <h1 className="text-2xl font-bold">Legal</h1>
        <p className="text-gray-800 text-md">Privacy Policy</p>
        <p className="text-gray-800 text-md">Terms of Service</p>
        </div>
    </div>
      <hr></hr>
      <p className="text-center">© 2025 Shopi All rights reserved.</p>
    </div>

  
    
    )
    
}